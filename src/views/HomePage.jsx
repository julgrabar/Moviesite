import { FilmsList } from 'components/FilmsList/FilmsList';
import { Loading } from 'components/Loading/Loading';
import { fetchTrending } from 'services/api-service';
import { useFetching } from 'hooks/useFetching';
import { statusList } from 'hooks/useFetching';
import { useLocation } from 'react-router-dom';
import { Head } from './Head.styled';

const HomePage = () => {
  const [films, status] = useFetching(fetchTrending);
  const { pathname, search } = useLocation();

  return (
    <>
      <Head>Trending films</Head>
      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}
      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && films && (
        <FilmsList films={films} loc={pathname + search} />
      )}
    </>
  );
};

export default HomePage;
