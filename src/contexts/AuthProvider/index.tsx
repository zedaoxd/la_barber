import { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import {
  getUserLocalStorage,
  LoginRequest,
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
    const response = await LoginRequest(email, password);

    const paylod = { token: response.token, email };

    setUser(paylod);
    setUserLocalStorage(paylod);
  }

  function logout() {
    setUser(undefined);
    removeUserLocalStorage();
  }

  return (
    <AuthContext.Provider value={{ user, authenticate, logout }}>{children}</AuthContext.Provider>
  );
};
