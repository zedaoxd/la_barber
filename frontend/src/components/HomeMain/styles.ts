import styled from 'styled-components';

export const BackgroundContainer = styled.section`
  background-image: url('/images/bg-home.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
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

export const Button = styled.button`
  background-color: #00000070;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Iceland', cursive;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 2px solid #78502d;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 1s, box-shadow 1s;

  &:hover {
    transition-delay: 0s, 1s;
    box-shadow: 0 0 10px #78502d, 0 0 20px #78502d, 0 0 40px #78502d, 0 0 80px #78502d,
      0 0 160px #78502d;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1.875rem;
    width: 0;
    height: 100%;
    background-color: #78502d;
    transform: skew(35deg);
    z-index: -1;
    transition: all 1s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
`;
