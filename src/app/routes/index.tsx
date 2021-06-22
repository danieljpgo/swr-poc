import { Routes, Route, Navigate } from 'react-router-dom';
import UserDetails from '../pages/UserDetails';
import Users from '../pages/Users';

const Routers = () => (
  <Routes>
    <Route key="users" path="users" element={<Users />} />
    <Route key="details" path="users/:id" element={<UserDetails />} />
    <Route path="/*" element={<Navigate to="users" />} />
  </Routes>
);

export default Routers;
