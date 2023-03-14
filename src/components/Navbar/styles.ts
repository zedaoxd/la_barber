import styled from 'styled-components';

export const Header = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & figure {
    & img {
      width: 100px;
    }
  }

  & nav {
    & ul {
      display: flex;
      align-items: center;
      list-style: none;

      & li {
        margin-left: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: #333;

        & a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #333;
          transition: font-weight 0.2s ease-in-out;

          &:hover {
            font-weight: 600;
          }
        }
      }
    }
  }
`;
