import axios from 'axios';
import { getUserLocalStorage } from '../contexts/AuthProvider/util';
import useAuth from '../hooks/useAuth';

export const Api = axios.create({
  baseURL: 'http://localhost:8080',
});

Api.interceptors.request.use(
  config => {
    //const user = getUserLocalStorage();

    const { user } = useAuth();

    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
