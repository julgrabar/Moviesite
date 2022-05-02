import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container.styled';
import { NavBar } from 'components/Navigation/NavBar';
import { Global } from 'components/Global';

export const Layout = () => {
  return (
    <>
      <Global />
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
