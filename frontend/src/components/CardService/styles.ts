import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background: #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  font-family: 'Iceland', cursive;
  color: #000;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
  }

  &:hover img {
    transition: all 0.4s;
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const FigureContainer = styled.figure`
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;

  img {
    max-width: 100%;
    max-height: 10rem;
    height: 100%;
  }
`;
