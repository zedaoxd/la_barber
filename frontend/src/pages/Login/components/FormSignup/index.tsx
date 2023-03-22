import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface IFormSignupInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormSignup = () => {
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFormSignupInputs>();
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  function onSubmit({ name, email, password }: IFormSignupInputs) {
    setLoading(true);
    signup(name, email, password).then(r => {
      if (r?.status === 201) {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Cadastro realizado com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then(() => reset());
      } else if (r?.status === 422) {
        Swal.fire({
          title: 'Erro!',
          text: 'Email já cadastrado',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
      setLoading(false);
    });
  }

  return (
    <div>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', {
            required: {
              value: true,
              message: 'Nome obrigatório',
            },
          })}
          type="text"
          placeholder="Nome"
        />
        {errors.name && <span>{errors.name.message}</span>}

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
        {errors.email && <span>{errors.email.message}</span>}

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
        {errors.password && <span>{errors.password.message}</span>}

        <input
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'Confirmação de senha obrigatória',
            },
            validate: {
              matchesPreviousPassword: value => {
                const { password } = getValues();
                return password === value || 'As senhas devem ser iguais';
              },
            },
          })}
          type="password"
          placeholder="Confirme sua senha"
        />
        <span>{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}</span>

        <button type="submit">
          {loading ? <ClipLoader color="#fff" size={20} /> : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
