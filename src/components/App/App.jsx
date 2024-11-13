import css from './App.module.css';
import './App.module.css';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('../..//pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Movie Search WebAPP</h1>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
