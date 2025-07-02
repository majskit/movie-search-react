import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import s from "./SearchResultsPage.module.css";
import NoResultsFound from "../../components/NoResultsFound/NoResultsFound";

const SearchResultsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (error) {
        console.error("Error searching movies:", error);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Link to="/" className={s.backLink}>
          ← Back to Home
        </Link>
        <h2 className={s.title}>Search results for: &quot;{query}&quot;</h2>
      </div>

      {isLoading && <Loader />}

      {movies.length > 0 && <MovieList movies={movies} />}

      {movies.length === 0 && !isLoading && query !== "" && <NoResultsFound />}
    </div>
  );
};

export default SearchResultsPage;
