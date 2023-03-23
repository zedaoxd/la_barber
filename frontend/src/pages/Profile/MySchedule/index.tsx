import { useQuery } from '@tanstack/react-query';
import ClipLoader from 'react-spinners/ClipLoader';
import useAuth from '../../../hooks/useAuth';
import { getAppointmentPending, getHistory } from '../../../services/appointmentService';
import { Appointment, AppointmentList, Container, NoAppointment } from './styles';
import Time from './Time';

const MySchedule = () => {
  const { authState } = useAuth();
  const { data: appointment } = useQuery(['getAppointmentPending'], () =>
    getAppointmentPending(authState?.user?.id),
  );

  const { data: appointments, isLoading } = useQuery(['getHistory'], () =>
    getHistory(authState?.user?.id),
  );

  return (
    <Container>
      <Appointment>
        <h2>Horário marcado</h2>
        {appointment ? (
          <Time
            status={appointment.statusAppointment}
            type={appointment.typeAppointment}
            date={new Date(appointment.millis).toLocaleDateString()}
            time={new Date(appointment.millis).toLocaleTimeString().slice(0, 5)}
          />
        ) : (
          <NoAppointment>
            <p>Nenhum horário marcado</p>
          </NoAppointment>
        )}
      </Appointment>

      <AppointmentList>
        <h2>Histórico de horários</h2>
        {isLoading && <ClipLoader size={100} />}
        {appointments &&
          appointments.map(app => (
            <Time
              key={app.id}
              date={new Date(app.millis).toLocaleDateString()}
              status={app.statusAppointment}
              time={new Date(app.millis).toLocaleTimeString().slice(0, 5)}
              type={app.typeAppointment}
            />
          ))}
      </AppointmentList>
    </Container>
  );
};

export default MySchedule;
