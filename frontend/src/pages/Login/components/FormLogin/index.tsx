import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import ClipLoader from 'react-spinners/ClipLoader';

interface IFormLoginInputs {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { authenticate } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormLoginInputs>({});
  const [loading, setLoading] = useState(false);

  async function handleLogin({ email, password }: IFormLoginInputs) {
    try {
      setLoading(true);
      authenticate(email, password).then(response => {
        if (response?.status === 200) {
          navigate('/profile');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email ou senha inválidos!',
          });
          setLoading(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
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

        <button type="submit">{loading ? <ClipLoader color="#fff" size={20} /> : 'Entrar'}</button>
      </form>
      <a href="#">Esqueci minha senha</a>
    </div>
  );
};

export default FormLogin;
