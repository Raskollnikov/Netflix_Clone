import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="">
      <Header />
      {/* 
        MainContainer
          -VideoBackground
          -Video Title
        SecondaryContainer
          -MovieList * n
            -cards * n
      */}
    </div>
  );
};

export default Browse;
