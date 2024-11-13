import css from './MovieDetailsPage.module.css';
import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { moviesById } from '../../api';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import toast from 'react-hot-toast';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const backUrl = location.state?.from || '/movies';
  const goBack = () => navigate(backUrl);

  useEffect(() => {
    const fetchMoviesById = async () => {
      try {
        const response = await moviesById(movieId);
        setMovie(response);
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
    fetchMoviesById();
  }, [movieId]);

  return (
    <div className={css.container}>
      <button className={css.btn} onClick={goBack}>
        Go back
      </button>
      {movie !== null && <MovieDetails movie={movie} />}
      <ul className={css.list}>
        <li className={css.link}>
          <NavLink state={{ from: backUrl }} to="cast">
            Cast
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink state={{ from: backUrl }} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
