import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Head } from '../Head.styled';
import { LoginFormWrapper } from '../LoginPage/LoginPage.styled';

export const SignupPage = () => {
  return (
    <LoginFormWrapper style={{ paddingTop: 12, paddingBottom: 24 }}>
      <div>
        <Head>Sign up</Head>
        <RegisterForm />
      </div>
    </LoginFormWrapper>
  );
};
