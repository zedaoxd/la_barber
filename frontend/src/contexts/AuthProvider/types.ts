import { AxiosResponse } from 'axios';

export interface IUser {
  id?: number;
  name?: string;
  email?: string;
}

export interface IAuthState {
  user: IUser | null;
  token: string | null;
}

export interface IContext {
  authState: IAuthState | undefined;
  authenticate: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<AxiosResponse<any, any> | any>;
  logout: () => void;
}

export interface IAuthProvider {
  children: React.ReactNode;
}
