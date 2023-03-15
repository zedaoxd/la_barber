import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
  const { email } = useAuth();

  if (!email) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
