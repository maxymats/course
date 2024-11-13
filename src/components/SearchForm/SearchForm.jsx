import css from './SearchForm.module.css';

const SearchForm = ({ setSearchParams }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    setSearchParams({ query: value });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="query"
        placeholder="Search movies"
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
