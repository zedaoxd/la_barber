export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext {
  user: IUser | undefined;
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: React.ReactNode;
}
