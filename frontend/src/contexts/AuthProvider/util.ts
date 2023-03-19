import { Api } from '../../services/api';
import { IUser } from './types';

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const user = localStorage.getItem('u');
  return user ? JSON.parse(user) ?? null : null;
}

export function removeUserLocalStorage() {
  localStorage.removeItem('u');
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post('/login', { email, password });
    return request.data;
  } catch (e) {
    return null;
  }
}
