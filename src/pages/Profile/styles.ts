import styled from 'styled-components';

export const Background = styled.div`
  height: 94vh;
  width: 100%;
  background-color: #f0f0f5;
  background-image: url('public/images/bg-services.jpg');
  background-repeat: repeat;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #000;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ContainerProfile = styled.div`
  width: 100%;
  height: 95%;
  background: #fff;
  color: #000;
  padding: 2rem;
  margin-top: 0;
  margin-left: 2rem;
  margin-right: 0;
  margin-bottom: 0;
  border-radius: 8px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 95%;
    margin: 0 1rem;
    height: auto;
  }

  @media (max-width: 425px) {
    margin: 0 0.5rem;
  }
`;
