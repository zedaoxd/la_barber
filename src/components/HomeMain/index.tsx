import logo from './../../assets/images/logo-white.png';
import { BackgroundContainer, Container, FigureContainer, Title } from './styles';

const HomeMain = () => {
  return (
    <BackgroundContainer>
      <Container>
        <FigureContainer>
          <img src={logo} alt="" />
        </FigureContainer>

        <Title>A melhor barbearia masculina da região</Title>
      </Container>
    </BackgroundContainer>
  );
};

export default HomeMain;
