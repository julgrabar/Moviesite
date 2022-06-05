import { Nav, UserBar } from './Nav.styled';
import { NavLink } from 'react-router-dom';
import { Container } from 'components/Container.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from 'redux/auth/authSelectors';
import { logout } from 'services/api-service';
import { logoutUser } from 'redux/auth/authSlice';

export const NavBar = () => {
  const isLogged = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout();
    dispatch(logoutUser());
  };

  return (
    <Nav>
      <Container>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <UserBar>
          {isLogged ? (
            <>
              <p>{`Hello, ${user}!`}</p>
              <button type="button" onClick={() => handleLogout()}>
                Log out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign up</NavLink>
            </>
          )}
        </UserBar>
      </Container>
    </Nav>
  );
};
