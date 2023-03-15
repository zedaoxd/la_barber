import logo from './../../assets/images/logo-white.png';
import { BackgroundContainer, Button, Container, FigureContainer, Title } from './styles';

const HomeMain = () => {
  return (
    <BackgroundContainer id="home-section">
      <Container>
        <FigureContainer>
          <img src={logo} alt="" />
        </FigureContainer>

        <Title>A melhor barbearia masculina da região</Title>
        <Button>Agende um serviço</Button>
      </Container>
    </BackgroundContainer>
  );
};

export default HomeMain;
