import styled from 'styled-components';

export const BackgroundContainer = styled.section`
  background-image: url('src/assets/images/bg-services.jpg');
  background-repeat: repeat;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  font-family: 'Neonderthaw', cursive;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0rem;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  margin: 2rem 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const GridServices = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
