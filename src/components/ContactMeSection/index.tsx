import React from 'react';
import {
  BackgroundContainer,
  Container,
  FigureContainer,
  FormContainer,
  MapContainer,
  FormFigureContainer,
} from './styles';

const ContactMeSection = () => {
  return (
    <BackgroundContainer>
      <Container>
        <h1>Entre em contato</h1>
        <FormFigureContainer>
          <FormContainer>
            <h1>Contato</h1>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <textarea placeholder="Mensagem" />
            <button type="submit">Enviar</button>
          </FormContainer>

          <FigureContainer>
            <img src="src/assets/images/contact-02.svg" alt="Contato" />
          </FigureContainer>
        </FormFigureContainer>

        <MapContainer>
          <h2>Como Chegar</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3709.0106108738423!2d-42.11203413253518!3d-21.62451018462036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbd11139a6e419f%3A0x15ac280b1927fd20!2sLA%20BARBER%20SOCIAL%20CLUB!5e0!3m2!1spt-BR!2sbr!4v1678815937020!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </MapContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default ContactMeSection;
