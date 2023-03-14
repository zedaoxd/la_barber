import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  background-image: url('src/assets/images/bg-home.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 0;
`;

export const FigureContainer = styled.figure`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  & img {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: 'Iceland', cursive;
  max-width: 700px;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-top: -2rem;
`;
