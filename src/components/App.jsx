import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from 'views/LoginPage/LoginPage';
import { SignupPage } from 'views/SignUpPage/SignupPage';
import { PublicRoute } from './CustomRoutes/publicRoute';
import { Layout } from './Layout/Layout';
import { Loading } from './Loading/Loading';

const HomePage = lazy(() => import('views/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('views/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('views/MoviesPage/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFoundPage = lazy(() => import('views/NotFoundPage/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route
            path="login"
            element={
              <PublicRoute strict>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
