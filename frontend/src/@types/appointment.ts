export type AppointmentType = {
  id: number | null;
  millis: number;
  barberId: number;
  clientId: number;
  typeAppointment: 'BARBA' | 'CORTE' | 'BARBA_CORTE';
};
