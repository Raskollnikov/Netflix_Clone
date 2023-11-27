import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../utils/useUpcoming";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  const gptTest = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="">
      <Header />
      {gptTest ? (
        <>
          <GptSearch />
        </>
      ) : (
        <div className="">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
