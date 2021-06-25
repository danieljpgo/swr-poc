import { Routes, Route, Navigate } from 'react-router-dom';
import Details from '../pages/Details';
import Users from '../pages/Users';

const Routers = () => (
  <Routes>
    <Route key="users" path="users" element={<Users />} />
    <Route key="details" path="users/:id" element={<Details />} />
    <Route path="/*" element={<Navigate to="users" />} />
  </Routes>
);

export default Routers;
