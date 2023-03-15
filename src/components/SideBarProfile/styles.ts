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
    display: none;
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
    background-color: #e1e1e6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    font-family: 'Iceland', cursive;

    h3 {
      font-weight: 400;
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
`;
