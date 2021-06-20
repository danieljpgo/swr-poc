import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { User } from '../../../common/types/user';

interface Props {
  user: User;
  children: React.ReactNode;
}

const Card = (props: Props) => {
  const { user, children } = props;
  const { id, name } = user;

  const isSaving = !!id && id < 0;

  return (
    <Container $loading={isSaving}>
      <div>
        <Link
          to={`/users/${id}`}
          data-userid={id}
          style={id && id < 0 ? { pointerEvents: 'none' } : {}}
        >
          {name}
        </Link>
        {isSaving && (<div>saving</div>)}
      </div>
      {children}
    </Container>
  );
};

export default Card;
