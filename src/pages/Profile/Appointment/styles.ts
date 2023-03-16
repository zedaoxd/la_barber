import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form``;

export const GridHours = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  margin-top: 16px;

  .btn-hour-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
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
  transition: background-color 0.2s;

  &:not(.selected):disabled {
    background: red;
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
