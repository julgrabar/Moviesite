import { FilmsList } from 'components/FilmsList/FilmsList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useFetching } from 'hooks/useFetching';
import { useEffect, useState } from 'react';
import { searchMovies } from 'services/api-service';
import { statusList } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';
import { useLocation } from 'react-router-dom';

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, status] = useFetching(searchMovies, searchValue);
  const { search, pathname } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search).get('query');
    if (query) {
      setSearchValue(query);
    }
  }, []);

  return (
    <>
      <SearchForm onSub={setSearchValue} />

      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}

      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && searchResult && (
        <>
          <h1>Search results</h1>
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
