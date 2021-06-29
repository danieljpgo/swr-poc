import * as React from 'react';
import { Input, Button, Textarea } from '@geist-ui/react';
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

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const isDisabled = !form.name || !form.email;

  return (

    <form
      style={{
        gap: '21.333px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
      onSubmit={(e) => handleSubmit(e, form)}
    >
      <Input
        id="name"
        name="name"
        type="text"
        width="100%"
        placeholder="Name"
        value={form.name}
        onChange={handleInputChange}
      />
      <Input
        id="email"
        type="email"
        name="email"
        width="100%"
        placeholder="Email"
        value={form.email}
        onChange={handleInputChange}
      />
      <div style={{
        gap: '21.333px',
        display: 'grid',
        alignItems: 'self-end',
        gridColumn: 'span 2',
        gridTemplateColumns: '5fr 1fr',
      }}
      >
        <Textarea
          id="bio"
          name="bio"
          placeholder="Bio"
          minHeight="unset"
          value={form.email}
          onChange={handleInputChange}
        />
        <Button
          size="small"
          htmlType="submit"
          disabled={isDisabled}
        >
          submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
