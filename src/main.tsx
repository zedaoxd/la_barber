import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContext from './contexts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
);
