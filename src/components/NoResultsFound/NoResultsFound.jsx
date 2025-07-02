import s from "./NoResultsFound.module.css";

const NoResultsFound = () => {
  return (
    <div className={s.container}>
      <img
        src="/oh-no.webp"
        alt="Oh, no - No results found"
        className={s.image}
      />
      <h3 className={s.message}>No movies found</h3>
      <p className={s.subMessage}>Try searching with different keywords</p>
    </div>
  );
};

export default NoResultsFound;
