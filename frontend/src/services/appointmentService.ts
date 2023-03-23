import { AppointmentType } from '../@types/appointment';
import { Api } from './api';

export const findByDateAndBarber = async (millis: number, barberId: number) => {
  return (await Api.get<AppointmentType[]>(`/appointments/${barberId}/${millis}`)).data;
};

export const getAppointmentPending = async (userId?: number) => {
  if (!userId) {
    return null;
  }
  return (await Api.get<AppointmentType | null>(`/appointments/pending/${userId}`)).data;
};

export const save = async (appointment: AppointmentType) => {
  return (await Api.post<AppointmentType>('/appointments', appointment)).data;
};
