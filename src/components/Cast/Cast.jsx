import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api-service';
import { useFetching } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';
import { statusList } from 'hooks/useFetching';
import { CastList } from './Cast.styled';
import insteadPhoto from '../../images/actor.png';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, status] = useFetching(fetchMovieCredits, movieId, null);

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
        <CastList>
          {actors.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : insteadPhoto
                }
                alt={actor.name}
              />
              <span>{actor.name}</span>
              <p>{`Role: ${actor.character}`}</p>
            </li>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;
