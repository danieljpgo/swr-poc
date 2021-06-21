import * as React from 'react';
import { Input, Text, Button } from '@geist-ui/react';
import { User } from '../../../common/types/user';

interface FormProps {
  user: User;
  onSubmit: (user: User) => void;
}

const defaultUser: User = {
  name: '',
  email: '',
};

const Form = (props: FormProps) => {
  const { user, onSubmit } = props;
  const [form, setForm] = React.useState<User>(defaultUser);

  React.useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>, saveUser: User) {
    event.preventDefault();
    onSubmit(saveUser);
    setForm(defaultUser);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const { name, email } = form;

  return (
    <form onSubmit={(e) => handleSubmit(e, form)}>
      <Input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={handleInputChange}
      >
        <Text>name</Text>
      </Input>
      <Input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
      >
        <Text>email</Text>
      </Input>
      <Button htmlType="submit" disabled={!name || !email}>
        submit
      </Button>
    </form>
  );
};

export default Form;
