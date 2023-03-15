import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="" element={<h2>Profile</h2>} />
        </Route>

        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
