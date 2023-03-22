import { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IAuthState, IContext, IUser } from './types';
import {
  getAuthStateLocalStorage,
  LoginRequest,
  RegisterRequest,
  removeAuthStateLocalStorage,
  setAuthStateLocalStorage,
} from './util';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthState | undefined>(undefined);

  useEffect(() => {
    const auth = getAuthStateLocalStorage();

    if (auth) {
      setAuthState(auth);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const data = await LoginRequest(email, password);

    setAuthState(data);
    setAuthStateLocalStorage(data);
  }

  async function signup(name: string, email: string, password: string) {
    const response = await RegisterRequest(name, email, password);
    return response;
  }

  function logout() {
    setAuthState(undefined);
    removeAuthStateLocalStorage();
  }

  return (
    <AuthContext.Provider value={{ authState, authenticate, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
