import { User } from '../@types/user';
import { Api } from './api';

export async function getAllBarbers() {
  return (await Api.get<User[]>('/users/barbers')).data;
}
