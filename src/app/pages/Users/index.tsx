import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../common/utils/hooks/useFetch';
import api from '../../common/services/api';
import { User } from '../../common/types/user';
import Form from './Form';
import { Container, Content } from './styles';
import ErrorMessage from '../../common/components/ErrorMessage';
import LoadingMessage from '../../common/components/LoadingMessage';

const Users = () => {
  const {
    data,
    isError,
    isLoading,
    mutate: mutateUsers
  } = useFetch<User[]>('users');

  async function handleSubmit(user: User) {
    // Temporary id to allow adding multiple users,
    // before making the POST Request to add user
    const tempId = Math.floor(Math.random() * -20000)

    // First add the new user to the global cache
    // with tempId and shouldRevalidate "false"
    // (because the call will be made manual)
    mutateUsers((prev) => [...prev, { ...user, id: tempId }], false)

    const newUser = await api
      .post<User>('/users', user)
      .then((response) => response.data)
      .catch((error) => alert(error));

    // After making the call on the api, the new user's id
    // will be updated on the global cache as the api returned 
    if (newUser) {
      mutateUsers((prev) => prev.map((user) => user.id === tempId
        ? { ...user, id: newUser.id }
        : user
      ), false)
    } else {
      mutateUsers((prev) => prev.filter((user) => user.id !== tempId), false)
    }
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={(newUser) => handleSubmit(newUser)} />
        <hr />
        <ul>
          {!isLoading
            ? data && data.map((user) => (
              <li key={user.id}>
                <Link
                  to={`/users/${user.id}`}
                  data-userid={user.id}
                >
                  {user.name}
                </Link>
                {user.id && (user.id < 0) && <sub style={{ verticalAlign: "super" }}>(saving)</sub>}
              </li>))
            : (<li><LoadingMessage /></li>)
          }
        </ul>
        {isError && (<ErrorMessage />)}
      </Content>
    </Container>
  )
};

export default Users;
