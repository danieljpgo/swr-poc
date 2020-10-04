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
    api
      .post<User>('/users', user)
      .then((response) => response.data)
      .catch((error) => alert(error));

    mutate((prev) => [...prev, { ...user, id: 0 }], false)
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
                <Link to={`/users/${user.id}`}>
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
