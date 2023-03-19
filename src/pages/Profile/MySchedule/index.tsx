import { Appointment, AppointmentList, Container } from './styles';
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
  ];

  return (
    <Container>
      <Appointment>
        <h2>Horário marcado</h2>
        <Time date="" status="Agendado" time="" type="" />
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
