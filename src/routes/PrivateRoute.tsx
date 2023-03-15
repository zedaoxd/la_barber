import { Navigate, Outlet } from 'react-router-dom';
//import { getUserLocalStorage } from '../contexts/AuthProvider/util';
import useAuth from '../hooks/useAuth';

const PrivateRoute = () => {
  //const user = getUserLocalStorage();
  const auth = useAuth();
  console.log('PrivateRoute => ', auth);

  if (auth.user?.token === undefined) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
