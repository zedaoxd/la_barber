import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Home, Login, Profile } from '../pages';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="" element={<Profile />} />
        </Route>

        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
