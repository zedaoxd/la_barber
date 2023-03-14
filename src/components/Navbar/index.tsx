import logo from './../../assets/images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CallIcon from '@mui/icons-material/Call';
import { Container, Header } from './styles';

const Navbar = () => {
  return (
    <Header>
      <Container>
        <figure>
          <img src={logo} alt="" />
        </figure>

        <nav>
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
        </nav>
      </Container>
    </Header>
  );
};

export default Navbar;
