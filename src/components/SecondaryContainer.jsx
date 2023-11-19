import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((movies) => movies.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black ">
        <div className="-mt-40 relative z-20 pl-12">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />

          <MovieList title="Popular" movies={movies.nowPlayingMovies} />
          <MovieList title="Trending" movies={movies.nowPlayingMovies} />
          <MovieList title="Upcoming Movies" movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
