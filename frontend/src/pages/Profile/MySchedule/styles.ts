import styled from 'styled-components';

export const Container = styled.div``;

export const Appointment = styled.div`
  width: 100%;

  h2 {
    font-size: 20px;
    color: #6a6180;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const AppointmentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  h2 {
    font-size: 20px;
    color: #6a6180;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const NoAppointment = styled.div`
  width: 100%;
  height: 100px;
  background: #e6e6f0;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid #e6e6f0;

  p {
    font-size: 20px;
    color: #6a6180;
  }
`;
