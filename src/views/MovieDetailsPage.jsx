import { useFetching } from 'hooks/useFetching';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api-service';
import { MovieInfo, MovieDetails, BtnLink } from './MovieDetailsPage.styled';
import { StyledLink } from './MovieDetailsPage.styled';
import { statusList } from 'hooks/useFetching';
import { Loading } from 'components/Loading/Loading';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  // const navigate = useNavigate();
  const [movie, status] = useFetching(fetchMovieDetails, movieId);

  // console.log(location);
  return (
    <div>
      {status === statusList.ERR && (
        <p>Something is wrong... Try to reload the page</p>
      )}
      {status === statusList.LOAD && <Loading />}
      {status === statusList.IDLE && movie && (
        <>
          <BtnLink to={location?.state?.from ?? '/'}>Go back</BtnLink>
          <MovieDetails>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="#"
            />
            <MovieInfo>
              <h2>{movie.title ?? movie.original_name}</h2>
              <p>Rating: {movie.vote_average ?? 'No information'}</p>
              <span>Overview</span>
              <p>{movie.overview}</p>
              <span>Genres</span>
              <p>{movie.genres.map(genre => genre.name).join(',')}</p>
            </MovieInfo>
          </MovieDetails>
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
