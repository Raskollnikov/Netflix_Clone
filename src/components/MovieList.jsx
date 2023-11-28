import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-transparent max-w-full overflow-x-scroll">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex">
        <div className="flex ">
          {movies?.map((each) => (
            <Link key={each.id} to={`/browse/${each.id}`}>
              <MovieCard key={each.id} {...each} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
