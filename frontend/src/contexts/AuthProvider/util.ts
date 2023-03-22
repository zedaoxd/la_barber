import { Api } from '../../services/api';
import { IUser } from './types';

export function setAuthStateLocalStorage(user: IUser | null) {
  localStorage.setItem('u', JSON.stringify(user));
}

export function getAuthStateLocalStorage() {
  const user = localStorage.getItem('u');
  return user ? JSON.parse(user) ?? null : null;
}

export function removeAuthStateLocalStorage() {
  localStorage.removeItem('u');
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post('/auth/login', { email, password });
    return request.data;
  } catch (e) {
    return null;
  }
}

export async function RegisterRequest(name: string, email: string, password: string) {
  try {
    const request = await Api.post('/auth/register', { name, email, password });
    return request;
  } catch (e: any) {
    return e.response.data;
  }
}
