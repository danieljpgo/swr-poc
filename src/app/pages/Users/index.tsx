import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../common/utils/hooks/useFetch';
import api from '../../common/services/api';
import { User } from '../../common/types/user';
import Form from './Form';
import { Container, Content } from './styles';

const Users = () => {
  const { data, mutate } = useFetch<User[]>('users');

  async function handleSubmit(user: User) {
    /* 
     * First add the new user to the global cache
     * with temporary id "0" and shouldRevalidate "false",
     * because the call will be made in the api
     */
    mutate((prev) => [...prev, { ...user, id: 0 }], false)

    const newUser = await api
      .post<User>('/users', user)
      .then((response) => response.data)
      .catch((error) => alert(error));

    /*
     * After making the call on the api, the new user's id
     * will be updated as the api returned on the global cache
     */
    if (newUser) {
      mutate((prev) => prev.map((user) => user.id === 0
        ? { ...user, id: newUser.id }
        : user
      ), false)
    } else {
      mutate((prev) => prev.filter((user) => user.id !== 0), false)
    }
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={(newUser) => handleSubmit(newUser)} />
        <hr />
        <ul>
          {data
            ? data.map((user) => (
              <li key={user.id}>
                <Link
                  to={`/users/${user.id}`}
                  data-userid={user.id}
                >
                  {user.name}
                </Link>
              </li>))
            : <li><h3>Loading ...</h3></li>}
        </ul>
      </Content>
    </Container>
  )
};

export default Users;
