import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Appointment, Home, Login, MySchedule, Profile } from '../pages';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="" element={<Navigate to="/profile/appointment" />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="/profile/appointment" element={<Appointment />} />
            <Route path="/profile/myschedule" element={<MySchedule />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
