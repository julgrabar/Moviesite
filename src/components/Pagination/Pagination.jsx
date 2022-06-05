import { Btn, PagWrapper } from 'views/MovieDetailsPage.styled';

export const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <PagWrapper>
      {page - 4 > 0 && (
        <Btn
          as="button"
          type="button"
          className="hide-btn"
          onClick={() => setPage(1)}
        >
          1
        </Btn>
      )}

      {page - 3 > 0 && (
        <Btn as="button" type="button" onClick={() => setPage(page - 3)}>
          ...
        </Btn>
      )}

      {page - 2 > 0 && (
        <Btn
          as="button"
          type="button"
          className="hide-btn"
          onClick={() => setPage(page - 2)}
        >
          {page - 2}
        </Btn>
      )}
      {page - 1 > 0 && (
        <Btn as="button" type="button" onClick={() => setPage(page - 1)}>
          {page - 1}
        </Btn>
      )}

      <Btn as="button" type="button" className="current" disabled>
        {page}
      </Btn>

      {totalPages >= page + 1 && (
        <Btn as="button" type="button" onClick={() => setPage(page + 1)}>
          {page + 1}
        </Btn>
      )}

      {totalPages >= page + 2 && (
        <Btn
          as="button"
          type="button"
          className="hide-btn"
          onClick={() => setPage(page + 2)}
        >
          {page + 2}
        </Btn>
      )}

      {totalPages >= page + 3 && (
        <Btn as="button" type="button" onClick={() => setPage(page + 3)}>
          ...
        </Btn>
      )}

      {totalPages >= page + 4 && (
        <Btn
          as="button"
          type="button"
          className="hide-btn"
          onClick={() => setPage(totalPages)}
        >
          {totalPages}
        </Btn>
      )}
    </PagWrapper>
  );
};
