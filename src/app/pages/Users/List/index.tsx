import * as React from 'react';
import { Table } from '@geist-ui/react';
import { User } from '../../../common/types/user';
// import Card from './Card';

type ListProps = {
  children: React.ReactNode;
  users: User[];
  onSelectUser: (user: User) => void;
};

const List = (props: ListProps) => {
  const { users, children, onSelectUser } = props;

  function handleSelectUser(user: User) {
    onSelectUser(user);
  }

  return (
    <Table data={[]}>
      <Table.Column prop="id" label="ID" width={180} />
      <Table.Column prop="name" label="Name" width={180} />
      <Table.Column prop="email" label="Email" width={110} />
      <Table.Column prop="complete" label="Complete" width={50} />
      <Table.Column prop="actions" label="Actions" />
    </Table>
  // <ul style={{ overflowY: 'auto' }}>
  //   {[...users].reverse().map((user) => (
  //     <Card
  //       key={user.id}
  //       user={user}
  //     >
  //       <Button
  //         disabled={!!user.id && user.id < 0}
  //         onClick={() => handleSelectUser(user)}
  //       >
  //         edit
  //       </Button>
  //     </Card>
  //   ))}
  //   {children}
  // </ul>
  );
};

export default List;
