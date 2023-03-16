import { Navigate, Outlet } from 'react-router-dom';
import { getUserLocalStorage } from '../contexts/AuthProvider/util';

const PrivateRoute = () => {
  const user = getUserLocalStorage();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
