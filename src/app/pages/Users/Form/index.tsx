import React from 'react';
import { Container } from './styles';

const Form: React.FC = () => {
  return (
    <Container>
      <div>
        <label id="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label id="email">Email</label>
        <input id="email" type="email" />
      </div>
      <button type="submit">
        submit
      </button>
    </Container>
  )
}

export default Form;