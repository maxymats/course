import css from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div className={css.container}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
        className={css.img}
      />
      <div>
        <h2 className={css.title}>
          <span className={css.span}>Title:</span>
          <br />
          {movie.title}
        </h2>
        <p className={css.original}>
          <span className={css.span}>Original title:</span>
          <br />
          {movie.original_title}
        </p>
        <ul className={css.list}>
          <li className={css.item}>
            <h3 className={css.itemTitle}>Tagline:</h3>
            <p className={css.itemText}>{movie.tagline}</p>
          </li>
          <li className={css.item}>
            <h3 className={css.itemTitle}>Overview:</h3>
            <p className={css.itemText}>{movie.overview}</p>
          </li>
          <li className={css.item}>
            <h3 className={css.itemTitle}>Genres:</h3>
            <p className={css.itemText}>
              {movie.genres && movie.genres.map(itm => itm.name).join(', ')}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
