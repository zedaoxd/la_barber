import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container, FigureContainer, LogoContainer, SocialMediaContainer } from './styles';

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <FigureContainer>
          <img src="src/assets/images/logo-white.png" alt="La Barber" />
        </FigureContainer>
        <div>
          <h1>La Barber</h1>
          <p>
            C La Barber 2023 - Todos os direitos reservados. <br />
            Desenvolvido por Bruno Lessa
          </p>
        </div>
      </LogoContainer>

      <SocialMediaContainer>
        <h2>Redes Sociais</h2>
        <a href="https://www.instagram.com/labarberbarbearia/">
          <InstagramIcon />
          Instagram
        </a>
        <a href="https://www.facebook.com/labarberbarbearia">
          <FacebookIcon /> Facebook
        </a>
      </SocialMediaContainer>
    </Container>
  );
};

export default Footer;
