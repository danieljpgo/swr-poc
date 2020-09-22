import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from '../pages/Users';

const Routes = () => {

  return (
    <Switch>
      <Route
        exact
        path="/"
        key="users"
      >
        <Users />
      </Route>
    </Switch>
  )
}

export default Routes;