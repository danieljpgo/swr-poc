import * as React from 'react';

type NavigationProps = {
  children: React.ReactNode;
};

const Navigation = (props: NavigationProps) => {
  const { children } = props;

  return (
    <main style={{ height: '100vh' }}>
      {children}
    </main>
  );
};

export default Navigation;
