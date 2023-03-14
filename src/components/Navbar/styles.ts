import styled from 'styled-components';

export const Header = styled.header`
  height: 4rem;
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
`;

interface NavProps {
  isMenuOpen: boolean;
}

export const MobileMenu = styled.div<NavProps>`
  display: none;
  cursor: pointer;
  height: 100%;

  & div {
    width: 2rem;
    height: 2px;
    background-color: #333;
    margin: 0.5rem 0;
    transition: all 0.3s ease-in;
  }

  & div:nth-child(1) {
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg) translate(-8px, 8px)' : 'rotate(0)')};
  }

  & div:nth-child(2) {
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
  }

  & div:nth-child(3) {
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg) translate(-6px, -7px)' : 'rotate(0)')};
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    background-color: #fff;
    top: 0;
    right: 0;
    padding: 1rem;
  }
`;

export const NavList = styled.nav<NavProps>`
  position: relative;

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
        transition: all 0.2s ease-in-out;

        &:hover {
          color: #78502d;
          font-weight: 600;
        }
      }
    }

    @media (max-width: 768px) {
      position: absolute;
      top: 3vh;
      right: 0;
      width: 50vw;
      height: 25vh;
      padding: 1rem;
      background-color: #fff;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(100%)')};

      & li {
        margin-left: 0;
        opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
        transition: all 0.2s ease-in;
      }
    }
  }
`;
