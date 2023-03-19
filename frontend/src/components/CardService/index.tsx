import scissors from '../../assets/images/scissors-comb.png';
import { Container, FigureContainer, Title } from './styles';

type CardServiceProps = {
  title: string;
  image: string;
};

const CardService = ({ title, image }: CardServiceProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FigureContainer>
        <img src={image} alt="" />
      </FigureContainer>
    </Container>
  );
};

export default CardService;
