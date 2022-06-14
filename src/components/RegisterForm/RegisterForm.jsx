import { StyledLoginForm } from 'components/LoginForm/LoginForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpRequest } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Field is required')
      .max(150, 'Username must be less, than 150 characters'),
    password: Yup.string()
      .required('Field is required')
      .min(9, 'Password must be at least 9 characters'),
    password2: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
    email: Yup.string()
      .required('Field is required')
      .email('Enter valid e-mail'),
    first_name: Yup.string().required('Field is required'),
    last_name: Yup.string().required('Field is required'),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = data => {
    dispatch(signUpRequest(data));
    reset();
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      {errors.username?.message && <p>{errors.username?.message}</p>}
      <input
        {...register('username')}
        placeholder="User name"
        type="text"
        autoComplete="off"
      />
      {errors.password?.message && <p>{errors.password?.message}</p>}
      <input {...register('password')} placeholder="Password" type="password" />
      {errors.password2?.message && <p>{errors.password2?.message}</p>}
      <input
        {...register('password2', {
          required: true,
        })}
        placeholder="Repeate the password"
        type="password"
        autoComplete="off"
      />
      {errors.email?.message && <p>{errors.email?.message}</p>}
      <input
        {...register('email', { required: true })}
        placeholder="E-mail"
        type="email"
        autoComplete="off"
      />
      {errors.first_name?.message && <p>{errors.first_name?.message}</p>}
      <input
        {...register('first_name', { required: true, maxLength: 150 })}
        placeholder="First name"
        type="text"
        autoComplete="off"
      />
      {errors.last_name?.message && <p>{errors.last_name?.message}</p>}
      <input
        {...register('last_name', { required: true, maxLength: 150 })}
        placeholder="Last name"
        type="text"
        autoComplete="off"
      />
      {/* <input {...register('firstName', { required: true, maxLength: 20 })} /> */}

      {/* {errors.password && <span>This field is required</span>} */}

      <button as="button" type="submit">
        Sign up
      </button>
    </StyledLoginForm>
  );
};
