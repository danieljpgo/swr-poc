import React from 'react';
import { Button } from '@geist-ui/react';
import { Container } from './styles';
import { User } from '../../../common/types/user';
import Card from './UserCard';

interface Props {
  children: React.ReactNode;
  users: User[];
  onSelectUser: (user: User) => void;
}

const List = (props: Props) => {
  const { users, children, onSelectUser } = props;

  function handleSelectUser(user: User) {
    onSelectUser(user);
  }

  return (
    <Container>
      <hr />
      <ul>
        {[...users].reverse().map((user) => (
          <Card
            key={user.id}
            user={user}
          >
            <Button
              disabled={!!user.id && user.id < 0}
              onClick={() => handleSelectUser(user)}
            >
              edit
            </Button>
          </Card>
        ))}
        {children}
      </ul>
      <hr />
    </Container>
  );
};

export default List;
