import { useEffect, useState } from "react";
import Movies from "./page/movies";
import MovieBox from "./component/movieBoxs";
import Loader from "./component/loader";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./component/errorMessage";
import PopCorn from "./component/popcorn";

const KEY = "7106cd23";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [noMovies, setNoMovies] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        setNoMovies(false);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        console.log(data);

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        console.error(err.message);
        setError(err.message);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }

  function handleMovieId(id) {
    navigate(`/movieDetails/${id}`);
  }

  return (
    <div className="w-full">
      <Movies value={query} onChange={setQuery} onSubmit={handleSubmit}>
        {noMovies && <PopCorn />}
        {isLoading && <Loader />}

        {!isLoading && !error && (
          <MovieBox movies={movies} setMovieId={handleMovieId} />
        )}

        {error && <ErrorMessage message={error} />}
      </Movies>
    </div>
  );
}

export default App;
