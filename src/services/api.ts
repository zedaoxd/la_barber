import axios from 'axios';
import { getUserLocalStorage } from '../contexts/AuthProvider/util';

export const Api = axios.create({
  baseURL: 'https://reqres.in/api/',
});

Api.interceptors.request.use(
  config => {
    const user = getUserLocalStorage();

    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
