import { FilmsList } from 'components/FilmsList/FilmsList';
import { Loading } from 'components/Loading/Loading';
import { fetchTrending } from 'services/api-service';
import { useFetching } from 'hooks/useFetching';
import { statusList } from 'hooks/useFetching';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [films, status] = useFetching(fetchTrending);
  const location = useLocation();

  return (
    <>
      <h1>Trending films</h1>
      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}
      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && films && (
        <FilmsList films={films} loc={location.pathname} />
      )}
    </>
  );
};

export default HomePage;
