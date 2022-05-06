import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useFetching } from 'hooks/useFetching';
import { searchMovies } from 'services/api-service';
import { statusList } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';
import { Head } from './Head.styled';
import { Btn, Controls } from './MovieDetailsPage.styled';
import { usePagination } from 'hooks/usePagination';

const MoviesPage = () => {
  const [page, onPagBtn] = usePagination(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, status, totalPages] = useFetching(
    searchMovies,
    page,
    searchParams.get('query') || ''
  );
  const { search, pathname } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search).get('query');
    if (query) {
      setSearchParams({ query });
    }
  }, [search, setSearchParams]);

  return (
    <>
      <Head>Movies search</Head>
      <SearchForm onSub={setSearchParams} />

      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}

      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && searchResult && (
        <>
          {searchResult && searchResult.length === 0 ? (
            <p>There are no films with this name</p>
          ) : (
            <FilmsList films={searchResult} loc={pathname + search} />
          )}
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

export default MoviesPage;
