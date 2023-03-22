import { useEffect } from 'react';
import FormLogin from './components/FormLogin';
import FormSignup from './components/FormSignup';
import { Background, Container, ContainerLogin, ContainerSignup } from './styles';

const Login = () => {
  useEffect(() => {
    document.title = 'La Barber | Auth';
  }, []);

  return (
    <Background>
      <Container>
        <ContainerLogin>
          <FormLogin />
        </ContainerLogin>
        <ContainerSignup>
          <FormSignup />
        </ContainerSignup>
      </Container>
    </Background>
  );
};

export default Login;
