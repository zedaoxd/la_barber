import { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import {
  getUserLocalStorage,
  LoginRequest,
  RegisterRequest,
  removeUserLocalStorage,
  setUserLocalStorage,
} from './util';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const data = await LoginRequest(email, password);

    setUser(data);
    setUserLocalStorage(data);
  }

  async function signup(name: string, email: string, password: string) {
    const response = await RegisterRequest(name, email, password);
    return response;
  }

  function logout() {
    setUser(undefined);
    removeUserLocalStorage();
  }

  return (
    <AuthContext.Provider value={{ user, authenticate, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
