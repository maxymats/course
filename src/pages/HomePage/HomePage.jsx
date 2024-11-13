import css from './HomePage.module.css';
import { trandMovies } from '../../api';
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrandMovies = async () => {
      try {
        const data = await trandMovies();
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
    fetchTrandMovies();
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Tranding today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
