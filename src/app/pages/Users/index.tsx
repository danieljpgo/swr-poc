import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../common/utils/hooks/useFetch';
import { User } from '../../common/types/user';
import Form from './Form';
import { Container, Content } from './styles';

const Users = () => {
  const { data } = useFetch<User[]>('users');

  return (
    <Container>
      <Content>
        <Form />
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
