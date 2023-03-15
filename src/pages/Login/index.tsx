import React from 'react';
import { Background, Container, ContainerLogin, ContainerSignup } from './styles';

const Login = () => {
  return (
    <Background>
      <Container>
        <ContainerLogin>
          <div>
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Senha" />
              <button type="submit">Entrar</button>
            </form>
            <a href="#">Esqueci minha senha</a>
          </div>
        </ContainerLogin>
        <ContainerSignup>
          <div>
            <h1>Cadastre-se</h1>
            <form>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Senha" />
              <input type="password" placeholder="Confirme sua senha" />
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </ContainerSignup>
      </Container>
    </Background>
  );
};

export default Login;
