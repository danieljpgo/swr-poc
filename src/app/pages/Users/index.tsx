import React, { useState } from 'react';
import { mutate as mutateGlobal } from 'swr';
import {
  Card, Divider, Page, Pagination, Text,
} from '@geist-ui/react';
import { User } from '../../common/types/user';
import { api } from '../../main/services/api';
import Form from './Form';
import List from './List';
import { useUsers } from '../../main/services/hooks';

const defaultUser: User = {
  name: '',
  email: '',
};

const Users = () => {
  const {
    data: users,
    state,
    mutate: mutateUsers,
  } = useUsers();

  const [userSelected, setUserSelected] = useState<User>(defaultUser);

  async function handleEditUser(userEdit: User, usersList: User[]) {
    const updateCachedUser = ({ name, email, id }: User) => (
      mutateUsers((prev) => prev?.map((user) => (user.id === id
        ? { ...user, email, name }
        : user)), false)
    );

    const { email, name, id } = userEdit;

    // Update the user information from the "users" cache router
    updateCachedUser(userEdit);
    // Update/create user information from the "users/id" cache router
    mutateGlobal(`users/${id}`, userEdit, false);

    const response = await api
      .put<User>(`/users/${id}`, { email, name })
      .then((res) => res.data)
      .catch((error) => alert(error));

    // In case of error in the PUT Request, the information added in
    // the cache must be removed and add the original
    if (!response) {
      const userOriginal = usersList.find((user) => user.id === id);

      if (userOriginal) {
        updateCachedUser(userOriginal);
        mutateGlobal(`users/${id}`, userOriginal, false);
      }
    }
  }

  async function handleCreateUser(user: User) {
    // Temporary id to allow adding multiple users,
    // before making the POST Request to create user
    const temporayId = Math.floor(Math.random() * -20000);

    // Add the new user to the "users" cache router
    mutateUsers((prev) => [...prev!, { ...user, id: temporayId }], false);

    const newUser = await api
      .post<User>('/users', user)
      .then((response) => response.data)
      .catch((error) => alert(error));

    if (newUser) {
      // After making the call on the api, the new user's id
      // will be updated on the global cache as the api returned
      mutateUsers((prev) => prev?.map((prevUser) => (prevUser.id === temporayId
        ? { ...user, id: newUser.id }
        : prevUser)), false);
      mutateGlobal(`users/${newUser.id}`, newUser, false);
      return;
    }
    // In case of error it will be removed from the cache
    mutateUsers((prev) => prev?.filter((prevUser) => prevUser.id !== temporayId), false);
  }

  function handleSubmit(userSubmitted: User, usersList: User[] | undefined) {
    if (userSubmitted.id && usersList) {
      handleEditUser(userSubmitted, usersList);
      return;
    }
    handleCreateUser(userSubmitted);
  }

  function handleSelectUser(user: User) {
    setUserSelected(user);
  }

  return (
    <Page>
      <Page.Content>
        <Card shadow style={{ maxWidth: '532px' }}>
          <Form
            user={userSelected}
            onSubmit={(newUser) => handleSubmit(newUser, users)}
          />
          <Divider />
          <List
            users={users || []}
            onSelectUser={(user) => handleSelectUser(user)}
          >
            {state === 'pending' && (<Text>loading...</Text>)}
            {state === 'error' && (<Text>Error on fetch data</Text>)}
          </List>
          <Pagination
            count={2}
            initialPage={1}
            limit={5}
            // onChange={handlePage}
          />
        </Card>
      </Page.Content>
    </Page>
  );
};

export default Users;
