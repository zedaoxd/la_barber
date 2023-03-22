import { AppointmentType } from '../@types/appointment';
import { Api } from './api';

export const findByDateAndBarber = async (millis: number, barberId: number) => {
  return (await Api.get<AppointmentType[]>(`/appointments/${barberId}/${millis}`)).data;
};

export const save = async (appointment: AppointmentType) => {
  return (await Api.post<AppointmentType>('/appointments', appointment)).data;
};
