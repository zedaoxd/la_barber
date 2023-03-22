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
  const { authState } = useAuth();

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
              <NavLink to={!!authState?.user ? '/profile' : '/login'}>
                <PersonIcon />
                {authState?.user ? authState.user.email : 'Login'}
              </NavLink>
            </li>
          </ul>
        </NavList>
      </Container>
    </Header>
  );
};

export default Navbar;
