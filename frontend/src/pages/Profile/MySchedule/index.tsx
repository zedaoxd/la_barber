import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { getAppointmentPending } from '../../../services/appointmentService';
import { Appointment, AppointmentList, Container, NoAppointment } from './styles';
import Time from './Time';

const MySchedule = () => {
  const times = [
    {
      id: 1,
      date: '01/04/2023',
      time: '15:00',
      type: 'Barba',
      status: 'Finalizado',
    },
    {
      id: 2,
      date: '03/03/2023',
      time: '17:00',
      type: 'Corte',
      status: 'Finalizado',
    },
    {
      id: 3,
      date: '02/03/2023',
      time: '09:00',
      type: 'Corte',
      status: 'Falta',
    },
    {
      id: 4,
      date: '01/03/2023',
      time: '19:00',
      type: 'Corte',
      status: 'Cancelado',
    },
  ];
  const { authState } = useAuth();
  const { data: appointment } = useQuery(['getAppointmentPending'], () =>
    getAppointmentPending(authState?.user?.id),
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

        {times.map(time => (
          <Time
            key={time.id}
            date={time.date}
            status={time.status}
            time={time.time}
            type={time.type}
          />
        ))}
      </AppointmentList>
    </Container>
  );
};

export default MySchedule;
