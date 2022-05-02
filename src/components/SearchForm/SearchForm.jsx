// import { useState } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

export const SearchForm = ({ onSub }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();

  const [query, setQuery] = useState(
    new URLSearchParams(search).get('query') || ''
  );

  const onSearchSub = e => {
    e.preventDefault();
    if (!query) {
      alert('Enter the search request');
      return;
    }
    // if (!searchParams.get('query').trim()) {
    //   alert('Enter the search request');
    //   return;
    // }

    // onSub(searchParams.get('query'));
    onSub(query ? { query } : { query: '' });
  };

  const onSearchInput = e => {
    const query = e.target.value;
    // setSearchParams(query ? { query } : {});
    setQuery(query);
  };

  return (
    <form onSubmit={onSearchSub}>
      <label>
        <input
          type="text"
          name="search"
          onChange={onSearchInput}
          // value={searchParams.get('query') || ''}
          value={query}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
