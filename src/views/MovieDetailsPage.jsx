import { useFetching } from 'hooks/useFetching';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api-service';
import {
  MovieInfo,
  MovieDetails,
  BtnLink,
  BackdropPoster,
  MovieTitle,
} from './MovieDetailsPage.styled';
import { StyledLink } from './MovieDetailsPage.styled';
import { statusList } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, status] = useFetching(fetchMovieDetails, movieId);

  // console.log(backdrop);
  return (
    <div>
      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}
      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && movie && (
        <>
          <BackdropPoster
            img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          >
            <MovieTitle>
              <h1>{movie.title ?? movie.original_name}</h1>
            </MovieTitle>
          </BackdropPoster>

          <MovieDetails>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="#"
            />

            <MovieInfo>
              <span className="tagline">{movie.tagline}</span>

              <p className="overview">{movie.overview}</p>

              <span>
                <p>Rating:</p>
                <p> {movie.vote_average ?? 'No information'}</p>
              </span>

              <span>
                <p>Release Date:</p>
                <p>{movie.release_date}</p>
              </span>

              <span>
                <p>Run time</p>
                <p>{movie.runtime}</p>
              </span>

              <span>
                <p>Genres</p>{' '}
                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
              </span>
            </MovieInfo>
          </MovieDetails>
          <BtnLink to={location?.state?.from ?? '/'}>Go back</BtnLink>
          <hr />
          <StyledLink to="cast">Cast</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
          <hr />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
