import notFoundImg from '../../images/notFound.svg';
import { Btn } from '../MovieDetailsPage/MovieDetailsPage.styled';
import { NotFoundContainer } from './NotFound.styled';

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <img src={notFoundImg} alt="Page is not found" />
      <h1>Lost your way?</h1>
      <p>
        Oops! This is awkward. You are looking for something that doesn't
        actually exist.
      </p>
      <Btn to="/">Go Home</Btn>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
