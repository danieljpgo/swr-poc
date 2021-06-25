import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, Text } from '@geist-ui/react';
import { User } from '../../../../common/types/user';

type UserCardProps = {
  user: User;
  children: React.ReactNode;
};

const UserCard = (props: UserCardProps) => {
  const { user, children } = props;
  const { id, name } = user;

  const isSaving = !!id && id < 0;

  return (
    <Card style={isSaving ? { pointerEvents: 'none' } : {}}>
      <Card.Content>
        <Link
          to={`/users/${id}`}
          data-userid={id}
          style={id && id < 0 ? { pointerEvents: 'none' } : {}}
        >
          <Text>{name}</Text>
        </Link>
        {isSaving && (<Text small>saving</Text>)}
      </Card.Content>
      <Card.Footer>
        {children}
      </Card.Footer>
    </Card>
  );
};

export default UserCard;
