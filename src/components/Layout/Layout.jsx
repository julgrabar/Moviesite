import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container.styled';
import { NavBar } from 'components/Navigation/NavBar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
