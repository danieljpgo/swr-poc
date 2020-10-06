import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

const TextField = (props: Props) => {
  const { id, ...rest } = props;

  return (
    <Container>
      <label htmlFor={id}>
        Name
      </label>
      <input {...rest} />
    </Container>
  )
}

export default TextField;