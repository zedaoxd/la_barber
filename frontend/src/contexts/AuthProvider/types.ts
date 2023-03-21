import { AxiosResponse } from 'axios';

export interface IUser {
  id?: number;
  token?: string;
}

export interface IContext {
  user: IUser | undefined;
  authenticate: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<AxiosResponse<any, any> | any>;
  logout: () => void;
}

export interface IAuthProvider {
  children: React.ReactNode;
}
