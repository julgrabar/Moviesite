// import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = ({ onSub }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchSub = e => {
    e.preventDefault();

    if (!searchParams.get('query').trim()) {
      alert('Enter the search request');
      return;
    }

    onSub(searchParams.get('query'));
  };

  const onSearchInput = e => {
    const query = e.target.value;
    console.log(Boolean(query));
    setSearchParams(query ? { query } : {});
  };

  return (
    <form onSubmit={onSearchSub}>
      <label>
        <input
          type="text"
          name="search"
          onChange={onSearchInput}
          value={searchParams.get('query') || ''}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
