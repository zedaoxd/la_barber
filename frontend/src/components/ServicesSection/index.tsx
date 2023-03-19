import CardService from '../CardService';
import { BackgroundContainer, Container, GridServices, Title } from './styles';

import scissors from '../../assets/images/scissors-comb.png';
import beard from '../../assets/images/beard.png';
import machine from '../../assets/images/machine.png';

const ServicesSection = () => {
  const services = [
    {
      title: 'Corte',
      image: scissors,
    },
    {
      title: 'Barba',
      image: beard,
    },
    {
      title: 'Maquina',
      image: machine,
    },
  ];

  return (
    <BackgroundContainer id="services-section">
      <Container>
        <Title>Nossos Serviços</Title>

        <GridServices>
          {services.map(service => (
            <CardService key={service.title} title={service.title} image={service.image} />
          ))}
        </GridServices>
      </Container>
    </BackgroundContainer>
  );
};

export default ServicesSection;
