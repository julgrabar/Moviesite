import { useState, useEffect } from 'react';

export const statusList = {
  IDLE: 'idle',
  LOAD: 'loading',
  ERR: 'error',
};

export const useFetching = (callback, page, fetchParametr = null) => {
  const [state, setState] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [status, setStatus] = useState(statusList.IDLE);

  useEffect(() => {
    if (fetchParametr === '') {
      return;
    }

    const fetchFilms = async () => {
      setStatus(statusList.LOAD);
      try {
        const result = await callback(page, fetchParametr);
        setState(result.results);
        setTotalPages(result.pages);
      } catch (error) {
        console.log(error);
        setStatus(statusList.ERR);
      } finally {
        setStatus(statusList.IDLE);
      }
    };
    fetchFilms();
  }, [page, callback, fetchParametr]);

  return [state, status, totalPages];
};
