import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api-service';
import { useFetching, statusList } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';
import { ReviewItem } from './Rewievs.styled';

const Reviews = () => {
  const page = 1;
  const { movieId } = useParams();
  const [reviews, status] = useFetching(fetchMovieReviews, page, movieId);

  return (
    <>
      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}
      {reviews && reviews.length === 0 && <p>There is no reviews</p>}
      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <span>{author}</span>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
