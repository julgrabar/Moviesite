import { useFetching } from 'hooks/useFetching';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api-service';
import {
  MovieInfo,
  MovieDetails,
  Btn,
  BackdropPoster,
  MovieTitle,
} from './MovieDetailsPage.styled';
import { StyledLink } from './MovieDetailsPage.styled';
import { statusList } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';
import backdrop from '../images/backdrop.jpg';
import poster from '../images/poster.jpg';
import { Suspense } from 'react';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, status] = useFetching(fetchMovieDetails, movieId);

  return (
    <div>
      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}
      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && movie && (
        <>
          <BackdropPoster
            img={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : backdrop
            }
          >
            <MovieTitle>
              <h1>{movie.title ?? movie.original_name}</h1>
            </MovieTitle>
          </BackdropPoster>

          <MovieDetails>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : poster
              }
              alt="#"
            />

            <MovieInfo>
              <span className="tagline">{movie.tagline}</span>

              <p className="overview">{movie.overview}</p>

              <span className="info-block">
                <p>Rating:</p>
                <p> {movie.vote_average || 'No information'}</p>
              </span>

              <span className="info-block">
                <p>Release Date:</p>
                <p>{movie.release_date}</p>
              </span>

              <span className="info-block">
                <p>Run time</p>
                <p>{`${movie.runtime} min`}</p>
              </span>

              <span className="info-block">
                <p>Genres</p>{' '}
                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
              </span>
            </MovieInfo>
          </MovieDetails>
          <Btn to={location?.state?.from ?? '/'}>Go back</Btn>
          <hr />
          <StyledLink to="cast" state={{ from: location?.state?.from ?? '/' }}>
            Cast
          </StyledLink>
          <StyledLink
            to="reviews"
            state={{ from: location?.state?.from ?? '/' }}
          >
            Reviews
          </StyledLink>
          <hr />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
