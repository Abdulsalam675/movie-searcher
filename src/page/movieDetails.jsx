import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import Logo from "../component/logo";
import { useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "../component/errorMessage";
import Loader from "../component/loader";

const KEY = "7106cd23";

function MovieDetails({ info }) {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(
    function () {
      async function fetchMovieDetails() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&i=${id}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False")
            throw new Error("Movie Details not found");

          setMovieDetails(data);
        } catch (err) {
          console.log(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchMovieDetails();
    },
    [id]
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <nav className="sticky top-0 container mx-auto bg-[#121a49] py-7">
          <div
            onClick={() => navigate(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white cursor-pointer"
          >
            <BiChevronLeft size={25} />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 overflow-hidden">
            <Logo smallSize={28} />
          </div>
        </nav>

        {isLoading && <Loader />}
        {!isLoading && !error && <MovieInfo info={movieDetails} />}
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}

function MovieInfo({ info }) {
  return (
    <div className="w-full flex flex-col md:flex-row pt-5 md:pt-10">
      <div className="md:w-1/2">
        <div className="w-52 md:w-[65%] md:h-[80%] h-auto mx-auto overflow-hidden">
          <img
            src={info?.Poster}
            alt="poster"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className=" md:w-1/2 text-gray-300 px-5 py-4 md:px-20 md:py-14">
        <h3 className="text-center text-xl md:text-4xl md:mb-2 font-semibold text-white">
          {info?.Title}
        </h3>
        <p className="text-center text-sm md:text-lg">{info?.Year}</p>
        <h3 className="text-lg text-white md:text-2xl py-4">
          <span>⭐ </span>
          {info?.imdbRating}
        </h3>
        <p className="break-words text-sm md:text-lg leading-relaxed">
          {info?.Plot}
        </p>
        <p className="text-sm md:text-lg pt-5 md:pt-8">
          Director:{" "}
          <span
            style={{
              color: "#ac7706ff",
              textDecoration: "underline",
              marginLeft: "6px",
            }}
          >
            {info.Director}
          </span>
        </p>
        <p className="text-sm md:text-lg pt-3">
          Writers:{" "}
          <span
            style={{
              color: "#ac7706ff",
              textDecoration: "underline",
              marginLeft: "6px",
            }}
          >
            {" "}
            {info?.Writer}
          </span>
        </p>
        <p className="text-sm md:text-lg pt-3">
          Released:
          <span
            style={{
              color: "#ac7706ff",
              textDecoration: "underline",
              marginLeft: "6px",
            }}
          >
            {" "}
            {info.Released}
          </span>
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
