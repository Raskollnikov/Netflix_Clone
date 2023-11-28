import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

function GptMovieSuggestions() {
  const gptMovies = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gptMovies;

  if (!movieNames) {
    return;
    //  <p className="text-white font-bold text-xl">shimmer!</p>;
  }
  return (
    <div className="p-4 m-4  text-white font-bold bg-black bg-opacity-90">
      <div>
        {movieNames.map((each, i) => (
          <MovieList key={each} title={each} movies={movieResults[i]} />
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestions;
