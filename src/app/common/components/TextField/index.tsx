import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement>;

const TextField = (props: Props) => {
  const { id, ...rest } = props;

  return (
    <Container>
      <label htmlFor={id}>
        Name
      </label>
      <input
          // eslint-disable-next-line
      {...rest} 
      />
    </Container>
  );
};

export default TextField;
