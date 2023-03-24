import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getAuthStateLocalStorage } from '../contexts/AuthProvider/util';

export const Api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080',
});

type TokenData = {
  exp: number;
  user_name: string;
  authorities: string[];
};

Api.interceptors.request.use(
  config => {
    const auth = getAuthStateLocalStorage();

    if (auth?.token) {
      const tokenData = jwtDecode<TokenData>(auth.token);
      if (tokenData.exp * 1000 < new Date().getTime()) {
        return config;
      }
      config.headers.Authorization = `Bearer ${auth.token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
