import logo from './../../assets/images/logo.png';
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </Container>
    </Header>
  );
};

export default Navbar;
