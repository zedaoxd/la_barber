import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
  background: #000;
  background-image: url('src/assets/images/bg-services.jpg');
`;

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
    color: #fff;
    font-family: 'Neonderthaw', cursive;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const FormFigureContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const FormContainer = styled.form`
  flex: 1;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 255, 1);

  h1 {
    font-family: 'Sono', sans-serif;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 1rem;
    margin-bottom: 1rem;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 1rem;

    &:focus {
      border-bottom: 1px solid #4b3469;
      outline: none;
    }
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 0 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    resize: none;

    &:focus {
      border: 1px solid #4b3469;
      outline: none;
    }
  }

  button {
    width: 100%;
    height: 40px;
    border: 0;
    border-radius: 4px;
    background: #000;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    background: #4b3469;
    color: #ccc;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
    max-width: 90%;
    padding: 1rem;
  }
`;

export const FigureContainer = styled.figure`
  width: 50%;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MapContainer = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 255, 1);
  padding-top: 1rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #000;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }

  iframe {
    height: 300px;
    border: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    display: block;
    margin: 2rem auto;

    iframe {
      height: 300px;
      width: 100%;
    }
  }
`;
