import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import FilterBar from "../../components/FilterBar/FilterBar";
import { fetchMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchMessage, setSearchMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getAllMovies = async () => {
      setIsLoading(true);
      const data = await fetchMovies();
      setMovies(data);
      setIsLoading(false);
    };
    getAllMovies();
  }, []);

  const handleChangeQuery = (query) => {
    if (query.trim() === "") {
      setSearchMessage("Please enter a movie title to search.");
      setTimeout(() => setSearchMessage(""), 3000);
      return;
    }
    setSearchMessage("");
    navigate(`/movies?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className={s.container}>
      <div className={s.searchSection}>
        <FilterBar handleChangeQuery={handleChangeQuery} />
        {searchMessage && (
          <div className={s.searchMessage}>{searchMessage}</div>
        )}
      </div>

      <div className={s.moviesSection}>
        {isLoading && <Loader />}
        <h2 className={s.title}>Trending today</h2>
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </div>
  );
};

export default HomePage;
