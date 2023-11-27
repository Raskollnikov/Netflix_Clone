import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-transparent max-w-full overflow-x-scroll">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex">
        <div className="flex ">
          {movies?.map((each) => (
            <MovieCard {...each} key={each.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
