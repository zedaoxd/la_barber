import logo from './../../assets/images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CallIcon from '@mui/icons-material/Call';
import { Container, Header, MobileMenu, NavList } from './styles';
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(prev => !prev);
  }

  return (
    <Header>
      <Container>
        <figure>
          <img src={logo} alt="" />
        </figure>

        <MobileMenu isMenuOpen={showMenu} onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </MobileMenu>

        <NavList isMenuOpen={showMenu}>
          <ul>
            <li>
              <a href="#">
                <HomeIcon />
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <ShoppingBasketIcon />
                Serviços
              </a>
            </li>
            <li>
              <a href="#">
                <CallIcon />
                Contato
              </a>
            </li>
          </ul>
        </NavList>
      </Container>
    </Header>
  );
};

export default Navbar;
