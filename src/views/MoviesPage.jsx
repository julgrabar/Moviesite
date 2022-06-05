import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useFetching } from 'hooks/useFetching';
import { searchMovies } from 'services/api-service';
import { statusList } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';
import { Head } from './Head.styled';
import { usePagination } from 'hooks/usePagination';
import { Pagination } from 'components/Pagination/Pagination';

const MoviesPage = () => {
  const { search, pathname } = useLocation();
  const queryPage = Number(new URLSearchParams(search).get('page'));
  const [page, setPage] = usePagination(queryPage || 1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, status, totalPages] = useFetching(
    searchMovies,
    page,
    searchParams.get('query') || ''
  );
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(search).get('query');
    if (query) {
      setSearchParams({ query });
      navigate(`${pathname}?query=${query}&page=${page}`, { replace: true });
    }
  }, [search, setSearchParams, page, navigate, pathname]);

  const onSearchSubmit = obj => {
    setSearchParams(obj);
    setPage(1);
  };

  return (
    <>
      <Head>Movies search</Head>
      <SearchForm onSub={onSearchSubmit} />

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
          {totalPages > 1 && (
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          )}
        </>
      )}
    </>
  );
};

export default MoviesPage;
