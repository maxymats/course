import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <Link
          state={{ from: location }}
          key={movie.id}
          to={`/movies/${movie.id}`}
          className={css.item}
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            className={css.img}
          />
          <p className={css.title}>{movie.title}</p>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;