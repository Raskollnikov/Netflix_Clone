import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="px-6 bg-transparent">
      <h1 className="text-3xl py-4 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((each) => (
            <MovieCard {...each} key={each.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
