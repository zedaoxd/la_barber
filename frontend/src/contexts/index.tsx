import React from 'react';
import { AuthProvider } from './AuthProvider';

interface IAppContext {
  children: React.ReactNode;
}

const AppContext = ({ children }: IAppContext) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export default AppContext;
