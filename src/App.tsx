import AppContext from './contexts';
import AppRoutes from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <AppContext>
        <GlobalStyle />
        <AppRoutes />
      </AppContext>
    </>
  );
}

export default App;
