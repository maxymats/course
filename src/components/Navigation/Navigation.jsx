import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={css.container}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="movies" className={css.link}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
