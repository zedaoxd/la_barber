import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  max-width: 1200px;
  height: 30vh;
  background: #000;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    width: 87%;

    p {
      font-size: 0.8rem;
    }
  }
`;

export const FigureContainer = styled.figure`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  img {
    width: 100%;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2rem 0;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: lightcoral;

      svg {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;

    h2 {
      margin-top: 1rem;
      font-size: 1.5rem;
    }

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    width: 87%;
    margin: 0 2rem;

    h2 {
      margin-top: 1rem;
      font-size: 1.5rem;
    }

    a {
      font-size: 0.8rem;
    }
  }
`;
