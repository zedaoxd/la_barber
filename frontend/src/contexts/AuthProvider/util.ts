import { Api } from '../../services/api';
import { IAuthState } from './types';

export function setAuthStateLocalStorage(user: IAuthState | null) {
  localStorage.setItem('u', JSON.stringify(user));
}

export function getAuthStateLocalStorage(): IAuthState | null {
  const user = localStorage.getItem('u');
  return user ? JSON.parse(user) ?? null : null;
}

export function removeAuthStateLocalStorage() {
  localStorage.removeItem('u');
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post<IAuthState>('/auth/login', { email, password });
    return request;
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
