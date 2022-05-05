import { FilmsList } from 'components/FilmsList/FilmsList';
import { Loading } from 'components/Loading/Loading';
import { fetchTrending } from 'services/api-service';
import { useFetching } from 'hooks/useFetching';
import { statusList } from 'hooks/useFetching';
import { useLocation } from 'react-router-dom';
import { Head } from './Head.styled';
import { useState } from 'react';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [films, status] = useFetching(fetchTrending, page, null);
  const { pathname, search } = useLocation();

  const onPagBtn = value => {
    setPage(prevPage => prevPage + value);
  };

  return (
    <>
      <Head>Trending films</Head>
      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}
      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && films && (
        <>
          <FilmsList films={films} loc={pathname + search} />
          {page > 1 && (
            <button type="button" onClick={() => onPagBtn(-1)}>
              Prev page
            </button>
          )}
          <button type="button" onClick={() => onPagBtn(1)}>
            Next page
          </button>
        </>
      )}
    </>
  );
};

export default HomePage;
