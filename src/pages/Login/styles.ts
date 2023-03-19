import styled from 'styled-components';

export const Background = styled.div`
  background-color: #f0f0f5;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #f90909;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ContainerLogin = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  border-right: 1px solid black;

  div {
    width: 100%;
    max-width: 350px;
    text-align: left;
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2rem;
      color: #3a3a3a;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      margin-bottom: 2rem;
    }

    form {
      width: 100%;
      max-width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        width: 100%;
        height: 3rem;
        border: none;
        padding: 0 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #a8a8b3;

        &:focus {
          outline: none;
        }
      }

      button {
        width: 100%;
        height: 3rem;
        background: #04d361;
        color: #fff;
        border: 0;
        border-radius: 0.25rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    a {
      color: #3d3d4d;
      margin-top: 1rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #3d3d4d;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid black;
  }
`;

export const ContainerSignup = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  div {
    width: 100%;
    max-width: 350px;
    text-align: left;
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2rem;
      color: #3a3a3a;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      margin-bottom: 2rem;
    }

    form {
      width: 100%;
      max-width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        width: 100%;
        height: 3rem;
        border: none;
        padding: 0 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #a8a8b3;

        &:focus {
          outline: none;
        }
      }

      button {
        width: 100%;
        height: 3rem;
        background: #04d361;
        color: #fff;
        border: 0;
        border-radius: 0.25rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    a {
      color: #3d3d4d;
      margin-top: 1rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #3d3d4d;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
`;
