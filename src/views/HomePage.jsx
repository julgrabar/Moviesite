import { useLocation, useNavigate } from 'react-router-dom';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { Loading } from 'components/Loading/Loading';
import { fetchTrending } from 'services/api-service';
import { useFetching } from 'hooks/useFetching';
import { statusList } from 'hooks/useFetching';
import { Head } from './Head.styled';
import { Btn, Controls } from './MovieDetailsPage.styled';
import { usePagination } from 'hooks/usePagination';
import { useEffect } from 'react';

const HomePage = () => {
  const { pathname, search } = useLocation();
  const queryPage = Number(new URLSearchParams(search).get('page'));
  const [page, onPagBtn] = usePagination(queryPage || 1);
  const [films, status, totalPages] = useFetching(fetchTrending, page, null);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/?page=${page}`, { replace: true });
  }, [page, navigate]);

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
          <Controls>
            {page > 1 && (
              <Btn as="button" type="button" onClick={() => onPagBtn(-1)}>
                Prev page
              </Btn>
            )}
            {page < totalPages && (
              <Btn as="button" type="button" onClick={() => onPagBtn(1)}>
                Next page
              </Btn>
            )}
          </Controls>
        </>
      )}
    </>
  );
};

export default HomePage;
