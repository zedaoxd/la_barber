import React from 'react';
import { AuthProvider } from './AuthProvider';
import QueryProvider from './QueryProvider';

const AppContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <QueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </QueryProvider>
    </>
  );
};

export default AppContext;
