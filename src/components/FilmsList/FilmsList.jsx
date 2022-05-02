import { Link } from 'react-router-dom';

export const FilmsList = ({ films, loc }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: loc }}>
            {film.title ?? film.original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
