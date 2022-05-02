import { useState, useEffect } from 'react';

export const statusList = {
  IDLE: 'idle',
  LOAD: 'loading',
  ERR: 'error',
};

export const useFetching = (callback, fetchParametr = null) => {
  const [state, setState] = useState(null);
  const [status, setStatus] = useState(statusList.IDLE);

  useEffect(() => {
    if (fetchParametr === '') {
      return;
    }

    const fetchFilms = async () => {
      setStatus(statusList.LOAD);
      try {
        const result = await callback(fetchParametr);
        setState(result);
      } catch (error) {
        console.log(error);
        setStatus(statusList.ERR);
      } finally {
        setStatus(statusList.IDLE);
      }
    };
    fetchFilms();
  }, [callback, fetchParametr]);

  return [state, status];
};
