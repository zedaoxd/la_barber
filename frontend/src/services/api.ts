import axios from 'axios';
import { getAuthStateLocalStorage } from '../contexts/AuthProvider/util';

export const Api = axios.create({
  baseURL: 'http://localhost:8080',
});

Api.interceptors.request.use(
  config => {
    const auth = getAuthStateLocalStorage();

    if (auth) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
