import { Nav } from './Nav.styled';
import { NavLink } from 'react-router-dom';
import { Container } from 'components/Container.styled';

export const NavBar = () => {
  return (
    <Nav>
      <Container>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Container>
    </Nav>
  );
};
