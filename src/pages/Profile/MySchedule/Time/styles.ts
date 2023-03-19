import styled from 'styled-components';

interface IAppointmentProps {
  status: string;
}

export const Container = styled.div<IAppointmentProps>`
  width: 100%;
  height: 100px;
  background: #e6e6f0;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 2px solid #e6e6f0;
  //#e6e6f0
  p {
    font-size: 20px;
    color: #6a6180;
  }

  &:hover {
    border: 2px solid ${props => (props.status === 'Agendado' ? '#ff6680' : 'transparent')};
    cursor: ${props => (props.status === 'Agendado' ? 'pointer' : 'default')};

    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const LeftContainer = styled.div`
  width: 50%;

  p:first-child {
    font-size: 24px;
    color: #333;
  }

  p:last-child {
    font-size: 16px;
    color: #777;
    display: flex;
    align-items: center;

    span {
      font-family: 'Orbitron', sans-serif;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
  }
`;

export const RightContainer = styled.div`
  flex: 1;

  p:first-child {
    font-size: 24px;
    color: #333;
  }

  p:last-child {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #777;
  }
`;

export const DeleteButton = styled.button`
  height: 40px;
  border-radius: 8px;
  background: #ff6680;
  border: 0;
  position: absolute;
  right: 16px;
  top: -20px;
  padding: 0 16px;
  display: none;
  letter-spacing: 0.1em;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #e3556e;
    color: #fff;
  }
`;
