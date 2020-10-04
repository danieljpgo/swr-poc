import React, { useState, FormEvent, ChangeEvent } from 'react';
import { User } from '../../../common/types/user';
import { Container } from './styles';

interface Props {
  onSubmit: (user: User) => void;
}

const defaultUser: User = {
  name: '',
  email: ''
}

const Form = (props: Props) => {
  const { onSubmit } = props;
  const [form, setForm] = useState<User>(defaultUser);

  function handleSubmit(event: FormEvent<HTMLFormElement>, user: User) {
    event.preventDefault();
    onSubmit(user);
    setForm(defaultUser);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const { name, email } = form;

  return (
    <Container onSubmit={(e) => handleSubmit(e, form)}>
      <div>
        <label
          id="name"
          htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        <label
          id="email"
          htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <button type="submit">
        submit
      </button>
    </Container>
  )
}

export default Form;