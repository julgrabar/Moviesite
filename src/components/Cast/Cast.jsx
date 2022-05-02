import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api-service';
import { useFetching } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';
import { statusList } from 'hooks/useFetching';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, status] = useFetching(fetchMovieCredits, movieId);

  return (
    <>
      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}
      {actors && actors.length === 0 && (
        <p>There is no information about actors</p>
      )}
      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && actors && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
