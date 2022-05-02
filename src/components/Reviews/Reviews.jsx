import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api-service';
import { useFetching } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';
import { statusList } from 'hooks/useFetching';

// добавить заглушку если нет отзывов и вообще все заглушки
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, status] = useFetching(fetchMovieReviews, movieId);

  return (
    <>
      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}
      {reviews && reviews.length === 0 && <p>There is no reviews</p>}
      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
