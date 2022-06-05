import { useForm } from 'react-hook-form';
import { StyledLoginForm } from './LoginForm.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginRequest } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    username: Yup.string().required('User name is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = data => {
    console.log(data);
    dispatch(loginRequest(data));
    resetField('password');
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      {errors.username?.message && <p>{errors.username?.message}</p>}
      <input {...register('username')} placeholder="User name" type="text" />

      {errors.password?.message && <p>{errors.password?.message}</p>}
      <input {...register('password')} placeholder="Password" type="password" />

      <button as="button" type="submit">
        Login
      </button>
    </StyledLoginForm>
  );
};
