import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
}

const Button = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export default Button;