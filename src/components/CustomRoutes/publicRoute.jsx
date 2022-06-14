import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const PublicRoute = ({ children, strict }) => {
  const isLogged = useSelector(getIsLoggedIn);
  return isLogged && strict ? <Navigate to="/movies" /> : children;
};
