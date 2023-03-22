import { Navigate, Outlet } from 'react-router-dom';
import { getAuthStateLocalStorage } from '../contexts/AuthProvider/util';

const PrivateRoute = () => {
  const auth = getAuthStateLocalStorage();

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
