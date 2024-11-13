import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <NavLink to="/">Sorry, page not found. Click to return!</NavLink>
    </div>
  );
};

export default NotFoundPage;
