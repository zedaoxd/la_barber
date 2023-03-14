import logo from './../../assets/images/logo-white.png';
import { Container, FigureContainer, Title } from './styles';

const HomeMain = () => {
  return (
    <Container>
      <FigureContainer>
        <img src={logo} alt="" />
      </FigureContainer>

      <Title>A melhor barbearia masculina da região</Title>
    </Container>
  );
};

export default HomeMain;
