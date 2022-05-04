import { FilmsList } from 'components/FilmsList/FilmsList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useFetching } from 'hooks/useFetching';
import { useEffect } from 'react';
import { searchMovies } from 'services/api-service';
import { statusList } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Head } from './Head.styled';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [searchValue, setSearchValue] = useState('');
  // const [searchResult, status] = useFetching(searchMovies, searchValue);
  const [searchResult, status] = useFetching(
    searchMovies,
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
      <Head>Search of movies</Head>
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
        </>
      )}
    </>
  );
};

export default MoviesPage;
