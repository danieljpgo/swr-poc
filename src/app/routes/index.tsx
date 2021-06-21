import { Switch, Route, Redirect } from 'react-router-dom';
import Users from '../pages/Users';
import UserDetails from '../pages/UserDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/users" key="users">
      <Users />
    </Route>
    <Route exact path="/users/:id" key="details">
      <UserDetails />
    </Route>
    <Redirect to="/users" />
  </Switch>
);

export default Routes;
