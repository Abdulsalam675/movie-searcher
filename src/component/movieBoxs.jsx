function MovieBox({ movies, setMovieId }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto px-3 py-16">
      {movies?.map((movie) => (
        <MovieCard movie={movie} setMovieId={setMovieId} key={movie.imdbID} />
      ))}
    </div>
  );
}

function MovieCard({ movie, setMovieId }) {
  return (
    <div>
      <div
        onClick={() => setMovieId(movie.imdbID)}
        className="w-full mx-auto bg-white rounded-lg overflow-hidden transition duration-5000  hover:opacity-80 cursor-pointer"
      >
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-40 md:h-64 object-cover"
        />
        <div className="p-3">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 text line-clamp-1">
            {movie.Title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            <div className="flex justify-between">
              <span>{movie.Year}</span>
              <span>{movie.Type}</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieBox;
