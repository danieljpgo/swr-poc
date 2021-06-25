import * as React from 'react';
import {
  Input, Text, Button, Card,
} from '@geist-ui/react';
import { User } from '../../../common/types/user';

type FormProps = {
  user: User;
  onSubmit: (user: User) => void;
};

const Form = (props: FormProps) => {
  const { user, onSubmit } = props;
  const [form, setForm] = React.useState<User>({ name: '', email: '' });

  React.useEffect(() => {
    if (user) {
      setForm(user);
    }
  }, [user]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>, saveUser: User) {
    event.preventDefault();
    onSubmit(saveUser);
    setForm({ name: '', email: '' });
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const isDisabled = !form.name || !form.email;

  return (
    <form onSubmit={(e) => handleSubmit(e, form)}>
      <Input
        id="name"
        name="name"
        type="text"
        value={form.name}
        onChange={handleInputChange}
      >
        <Text>name</Text>
      </Input>
      <Input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleInputChange}
      >
        <Text>email</Text>
      </Input>
      <Button htmlType="submit" disabled={isDisabled}>
        submit
      </Button>
    </form>
  );
};

export default Form;
