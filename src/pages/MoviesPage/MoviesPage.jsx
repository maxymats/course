import css from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchMovies } from '../../api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const data = await searchMovies(query);
        const results = data.results;
        setMovies(results);
      } catch (error) {
        toast.error(
          `Whoops, we found a problem! ${error.message} Please try again later!`,
          {
            position: 'top-center',
            duration: 2000,
          }
        );
      }
    };
    fetchSearchMovies();
  }, [query]);

  return (
    <div className={css.container}>
      <SearchForm setSearchParams={setSearchParams} value={query} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
