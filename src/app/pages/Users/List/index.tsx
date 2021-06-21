import * as React from 'react';
import { Button } from '@geist-ui/react';
import { User } from '../../../common/types/user';
import Card from './UserCard';

type ListProps = {
  children: React.ReactNode;
  users: User[];
  onSelectUser: (user: User) => void;
};

const List = (props: ListProps) => {
  const { users, children, onSelectUser } = props;

  function handleSelectUser(user: User) {
    onSelectUser(user);
  }

  return (
    <ul style={{ overflowY: 'auto' }}>
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
  );
};

export default List;
