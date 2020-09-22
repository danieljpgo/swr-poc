import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Users from '../pages/Users';
import Details from '../pages/Details';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/users"
      key="users"
    >
      <Users />
    </Route>
    <Route
      exact
      path="/users/:id"
      key="details"
    >
      <Details />
    </Route>
    <Redirect to="/users" />
  </Switch>
);

export default Routes;