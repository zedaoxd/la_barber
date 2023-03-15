import styled from 'styled-components';

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 360px;
  height: 100%;
  background: #ccc;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 360px;
    height: 100%;

    ul {
      list-style: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 32px;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 60px;
        background: #fff;
        margin-bottom: 8px;
        padding: 0 16px;
        text-decoration: none;
        color: #000;
        transition: background-color 0.2s ease-in;

        &:hover {
          background: #777;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-transform: uppercase;
          gap: 16px;
          font-family: 'Iceland', cursive;
          letter-spacing: 0.1rem;
          font-size: 1.3rem;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: #000;
          transition: all 0.2s ease-in;

          &:hover {
            color: #fff;
          }
        }
      }
    }

    span {
      color: #fff;
    }

    button {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      background: #880000;
      color: #fff;
      gap: 16px;
      padding: 0 16px;
      border: none;
      text-transform: uppercase;
      font-size: 1.3rem;
      transition: all 0.2s ease-in;

      &:hover {
        background: #aa0000;
        color: #fff;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 10%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    padding: 1rem;
    background-color: unset;

    nav {
      width: 100%;
      height: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      max-width: 100%;
      gap: 1rem;

      ul {
        width: 80%;
        height: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 0;
        gap: 1rem;

        li {
          width: 100%;
          height: 100%;
          margin-bottom: 0;
          background: #fff;
          transition: background-color 0.2s ease-in;
          border-radius: 8px;
          padding-left: 1rem;

          &:hover {
            background: #777;

            a {
              color: #fff;
            }
          }
        }
      }

      button {
        flex: 1;
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
  }

  @media (max-width: 512px) {
    height: 15vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    margin: 0;

    nav {
      flex-direction: column;
      height: 40%;
      width: 100%;
      max-width: 100%;
      margin-top: 1rem;
      margin-bottom: 0;
      justify-content: space-between;
      align-items: flex-end;

      ul {
        width: 100%;
        height: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        li {
          padding: 0.5rem;
          a {
            font-size: 1rem;
          }
        }
      }

      button {
        font-size: 1rem;
        margin: 0;
        width: 40%;
        height: 100%;
        padding: 0.5rem;
      }
    }
  }

  @media (max-width: 425px) {
    height: 20vh;

    nav {
      height: 40%;
      width: 100%;

      ul {
        width: 100%;
        height: 100%;

        li {
          padding: 0.3rem;
          a {
            font-size: 1rem;
          }
        }
      }

      button {
        font-size: 1rem;
        margin: 0;
        width: 40%;
        height: 100%;
        padding: 0.3rem;
      }
    }
  }
`;

export const ContainerAvatar = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    width: 100px;
    height: 100px;
    background-color: ${`#${Math.floor(Math.random() * 16777215).toString(16)}`};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    font-family: 'Iceland', cursive;

    h3 {
      font-weight: 400;
      color: ${`#${Math.floor(Math.random() * 16777215).toString(16)}`};
    }
  }

  p {
    margin-left: 1rem;
    font-size: 2rem;
    font-family: 'Iceland', cursive;
    max-width: 200px;
    overflow: hidden;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
