import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Background, Container, ContainerLogin, ContainerSignup } from './styles';

interface IFormLoginInputs {
  email: string;
  password: string;
}

const Login = () => {
  const { authenticate } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormLoginInputs>({});

  useEffect(() => {
    document.title = 'La Barber | Auth';
  }, []);

  async function handleLogin({ email, password }: IFormLoginInputs) {
    try {
      await authenticate(email, password);
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Background>
      <Container>
        <ContainerLogin>
          <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
              <span>{errors.email?.message}</span>
              <input
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email obrigatório',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                })}
                type="text"
                placeholder="Email"
              />

              <span>{errors.password?.message}</span>
              <input
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Senha obrigatória',
                  },
                })}
                type="password"
                placeholder="Senha"
              />

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
