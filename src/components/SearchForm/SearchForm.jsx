import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form } from './Form.styled';
import searchSvg from '../../images/search.svg';

export const SearchForm = ({ onSub }) => {
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

    onSub({ query: query || '' });
  };

  const onSearchInput = e => {
    const query = e.target.value;
    setQuery(query);
  };

  return (
    <Form onSubmit={onSearchSub}>
      <label>
        <input
          type="text"
          name="search"
          onChange={onSearchInput}
          value={query}
          placeholder="Search Movies"
          autoComplete="off"
        />
      </label>
      <button type="submit">
        <img src={searchSvg} alt="Search" />
      </button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSub: PropTypes.func.isRequired,
};
