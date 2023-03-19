import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { ContainerAvatar, SideBar } from './styles';

const SideBarProfile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <SideBar>
      <ContainerAvatar>
        <div>
          <h3>B</h3>
        </div>
        <p>Bruno Lessa</p>
      </ContainerAvatar>

      <nav>
        <ul>
          <li>
            <NavLink to="/profile/appointment">
              <AccessTimeIcon />
              Agende um hórario
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/myschedule">
              <AccessTimeFilledIcon />
              Meus horários
            </NavLink>
          </li>
        </ul>

        <button onClick={handleLogout}>
          <LogoutIcon />
          Sair
        </button>
      </nav>
    </SideBar>
  );
};

export default SideBarProfile;
