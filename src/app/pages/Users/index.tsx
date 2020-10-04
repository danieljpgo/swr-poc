import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../common/utils/hooks/useFetch';
import { User } from '../../common/types/user';
import LoadingMessage from '../../common/components/LoadingMessage';
import ErrorMessage from '../../common/components/ErrorMessage';
import api from '../../common/services/api';
import { Container, Content } from './styles';
import Form from './Form';

const defaultUser: User = {
  name: '',
  email: ''
}

const Users = () => {
  const {
    data,
    isError,
    isLoading,
    isValidating,
    mutate: mutateUsers
  } = useFetch<User[]>('users');

  const [userSelected, setUserSelected] = useState<User>(defaultUser);

  async function handleEditUser(userEdit: User, usersList: User[]) {
    const updateCachedUsers = ({ name, email, id }: User) => (
      mutateUsers((prev) => prev.map((user) => user.id === id
        ? { ...user, email, name }
        : user
      ), false)
    );

    const { email, name, id } = userEdit;

    // Add the new user information to the global cache
    updateCachedUsers(userEdit);

    const response = await api
      .put<User>(`/users/${id}`, { email, name })
      .then((response) => response.data)
      .catch((error) => alert(error));

    // In case of error in the user edition, the information
    // added in the cache must be removed and add the original
    if (!response) {
      const userOriginal = usersList.find((user) => user.id === id);

      if (userOriginal) {
        updateCachedUsers(userOriginal);
      }
    }
  }

  async function handleCreateUser(user: User) {
    // Temporary id to allow adding multiple users,
    // before making the POST Request to create user
    const tempId = Math.floor(Math.random() * -20000);

    // Add the new user to the global cache
    // with tempId and shouldRevalidate "false"
    // (because the api call will be made manual)
    mutateUsers((prev) => [...prev, { ...user, id: tempId }], false);

    const newUser = await api
      .post<User>('/users', user)
      .then((response) => response.data)
      .catch((error) => alert(error));

    if (newUser) {
      // After making the call on the api, the new user's id
      // will be updated on the global cache as the api returned 
      mutateUsers((prev) => prev.map((user) => user.id === tempId
        ? { ...user, id: newUser.id }
        : user
      ), false);
    } else {
      // In case of error it will be removed from the cache
      mutateUsers((prev) => prev.filter((user) =>
        user.id !== tempId
      ), false);
    }
  }

  function handleSubmit(userSubmitted: User, users: User[] | undefined) {
    if (userSubmitted.id && users) {
      handleEditUser(userSubmitted, users);
    } else {
      handleCreateUser(userSubmitted);
    }
  }

  function handleSelectUser(user: User) {
    setUserSelected(user);
  }

  return (
    <Container>
      <Content>
        <Form
          onSubmit={(newUser) => handleSubmit(newUser, data)}
          user={userSelected} />
        <hr />
        <ul>
          {!isLoading
            ? data && data.map((user) => (
              <li
                key={user.id}
                style={user.id && user.id < 0 ? { cursor: 'progress' } : {}}
              >
                <Link
                  to={`/users/${user.id}`}
                  data-userid={user.id}
                  style={user.id && user.id < 0 ? { pointerEvents: "none" } : {}}
                >
                  {user.name}
                </Link>
                {user.id && user.id < 0 &&
                  <sub style={{ verticalAlign: "super" }}>(saving)</sub>
                }
                <button
                  type="button"
                  onClick={() => handleSelectUser(user)}
                >
                  edit
                  </button>
              </li>))
            : (<li><LoadingMessage /></li>)
          }
        </ul>
        {isError && (<ErrorMessage />)}
        {isValidating && (<div>isValidating</div>)}
      </Content>
    </Container>
  )
};

export default Users;
