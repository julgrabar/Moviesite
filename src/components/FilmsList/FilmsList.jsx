import { Link } from 'react-router-dom';
import { ListItem, List, Vote } from './FilmsList.styled';

export const FilmsList = ({ films, loc }) => {
  return (
    <List>
      {films.map(
        ({
          id,
          poster_path: poster,
          original_title,
          title,
          vote_average: vote,
        }) => (
          <ListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: loc }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster}`}
                alt={title ?? original_title + 'poster'}
              />
              <div className="film-info">
                <p>{title ?? original_title}</p>
              </div>
              {vote !== 0 && (
                <Vote>
                  <span className="material-icons md-16">star_border</span>
                  {vote}
                </Vote>
              )}
            </Link>
          </ListItem>
        )
      )}
    </List>
  );
};
