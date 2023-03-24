import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #312e38;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
  padding: 32px 24px;

  h1 {
    color: #3a3a3a;
    margin-bottom: 32px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Iceland', cursive;
    color: #fff;
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 16px 8px;

    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }
`;

export const Form = styled.form`
  width: 70%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .react-datepicker__input-container input {
    display: block;
    width: 100%;
    height: 2rem;
    padding: 0 1rem;
    border: 0;
    border-radius: 0.2rem;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  h2 {
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GridHours = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  margin-top: 16px;

  .btn-hour-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 921px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface IHourSelectedProps {
  selected: boolean;
}

export const HourSelected = styled.button<IHourSelectedProps>`
  background: ${props => (props.selected ? '#0f9f0f' : '#777')};
  border: 0;
  border-radius: 10px;
  padding: 16px;
  color: #f4ede8;
  font-weight: 400;
  font-size: 1.2rem;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.2s;

  &:not(.selected):disabled {
    background: #b30000;
    color: #232129;
  }

  &.selected {
    background: #0f9f0f;
    color: #232129;
  }

  &:hover:not(:disabled) {
    background: #ff9000;
    color: #232129;
  }
`;

export const ButtonConfirm = styled.button`
  width: 100%;
  height: 2rem;
  padding: 0 1rem;
  border: 0;
  border-radius: 0.2rem;
  background: #0f9f0f;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Wanings = styled.div`
  text-align: justify;
  margin-top: 16px;
  background-color: #00000030;
  padding: 16px;
  border-radius: 0.5rem;

  p {
    font-size: 1.1rem;
    color: #ff0000;
    font-weight: 700;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
