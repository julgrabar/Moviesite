import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from 'views/LoginView';
import { SignupPage } from 'views/SignupPage';
import { Layout } from './Layout/Layout';
import { Loading } from './Loading/Loading';

const HomePage = lazy(() => import('views/HomePage'));
const MovieDetailsPage = lazy(() => import('views/MovieDetailsPage'));
const MoviesPage = lazy(() => import('views/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFoundPage = lazy(() => import('views/NotFound'));

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
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
