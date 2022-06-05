import { LoginForm } from 'components/LoginForm/LoginForm';
import { Head } from './Head.styled';
import { LoginFormWrapper } from './LoginView.styled';

export const LoginPage = () => {
  return (
    <LoginFormWrapper>
      <div>
        <Head>Login</Head>
        <LoginForm />
      </div>
    </LoginFormWrapper>
  );
};
