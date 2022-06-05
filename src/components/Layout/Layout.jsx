import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from 'components/Container.styled';
import { NavBar } from 'components/Navigation/NavBar';
import { Global } from 'components/Global';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/auth/authSelectors';
import { userDataRequest } from 'redux/auth/authOperations';
import { useTokenRefresh } from 'hooks/useTokenReresh';

export const Layout = () => {
  const token = useSelector(getToken);
  useTokenRefresh();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token.access) {
      dispatch(userDataRequest());
    }
  }, [dispatch, token]);

  return (
    <>
      <Global />
      <NavBar />
      <Container>
        <Outlet />
        <Toaster />
      </Container>
    </>
  );
};
