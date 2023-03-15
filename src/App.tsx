import AppContext from './contexts';
import AppRoutes from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <AppContext>
      <AppRoutes />
      <GlobalStyle />
    </AppContext>
  );
}

export default App;
