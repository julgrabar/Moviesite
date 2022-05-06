import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem, List, Vote, ImgThumb } from './FilmsList.styled';
import posterInstead from '../../images/poster.jpg';
import { useState } from 'react';

export const FilmsList = ({ films, loc }) => {
  const [loadedImg, setLoadedImg] = useState(false);

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
                src={
                  poster
                    ? `https://image.tmdb.org/t/p/w500${poster}`
                    : posterInstead
                }
                alt={title ?? original_title + 'poster'}
                onLoad={() => setLoadedImg(true)}
                style={{ display: loadedImg ? 'block' : 'none' }}
              />
              {!loadedImg && <ImgThumb />}

              <p className="film-info">{title ?? original_title}</p>

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

FilmsList.propTypes = {
  loc: PropTypes.string,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string,
      title: PropTypes.string,
      vote_average: PropTypes.number,
    }).isRequired
  ).isRequired,
};
