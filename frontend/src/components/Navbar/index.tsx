import logo from './../../assets/images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import { Container, Header, MobileMenu, NavList } from './styles';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useAuth();

  function handleMenu() {
    setShowMenu(prev => !prev);
  }

  return (
    <Header>
      <Container>
        <figure>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </figure>

        <MobileMenu isMenuOpen={showMenu} onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </MobileMenu>

        <NavList isMenuOpen={showMenu}>
          <ul>
            <li>
              <NavLink to={'/'}>
                <HomeIcon />
                Home
              </NavLink>
            </li>
            <li>
              <a href="/#services-section">
                <ShoppingBasketIcon />
                Serviços
              </a>
            </li>
            <li>
              <NavLink to={user?.email ? '/profile' : '/login'}>
                <PersonIcon />
                {user?.email ? user?.email : 'Login'}
              </NavLink>
            </li>
          </ul>
        </NavList>
      </Container>
    </Header>
  );
};

export default Navbar;