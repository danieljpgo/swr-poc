import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';
import Details from '../../pages/Details';
import Users from '../../pages/Users';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route key="users" path="users" element={<Users />} />
      <Route key="details" path="users/:id" element={<Details />} />
      <Route path="/*" element={<Navigate to="users" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
