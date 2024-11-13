import css from './MovieCast.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { castById } from '../../api';
import toast from 'react-hot-toast';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      try {
        const response = await castById(movieId);
        setCast(response.cast);
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
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <ul className={css.list}>
        {cast !== null &&
          cast.map(item => {
            return (
              <div key={item.id} className={css.card}>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                      : defaultImg
                  }
                  alt={item.name}
                  className={css.img}
                />
                <ul>
                  <li className={css.name}>{item.name}</li>
                  <li className={css.role}>{item.character}</li>
                </ul>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;
