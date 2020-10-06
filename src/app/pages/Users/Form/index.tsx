import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useEffect
} from 'react';
import Button from '../../../common/components/Button';
import TextField from '../../../common/components/TextField';
import { User } from '../../../common/types/user';
import { Container } from './styles';

interface Props {
  user: User;
  onSubmit: (user: User) => void;
}

const defaultUser: User = {
  name: '',
  email: ''
}

const Form = (props: Props) => {
  const { user, onSubmit } = props;
  const [form, setForm] = useState<User>(defaultUser);

  useEffect(() => {
    if (user) setForm(user);
  }, [user])

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
      <TextField
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      <TextField
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => handleInputChange(e)}
      />
      <Button
        type="submit"
        disabled={!name || !email}>
        submit
      </Button>
    </Container>
  )
}

export default Form;