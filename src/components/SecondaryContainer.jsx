import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((movies) => movies.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-[140px] md:-mt-40 pl-0 relative z-20 md:pl-12 pb-10">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />

          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Top Rated" movies={movies.topRated} />
          <MovieList title="Upcoming Movies" movies={movies.upcoming} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
