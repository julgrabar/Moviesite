import { useState } from 'react';

export const usePagination = init => {
  const [page, setPage] = useState(init);

  const onPagBtn = value => {
    setPage(prevPage => prevPage + value);
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return [page, onPagBtn, setPage];
};
