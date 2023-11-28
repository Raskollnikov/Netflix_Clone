import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailerVideo);

  const getData = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const response = await data.json();
      const filterTrailer = response.results.filter(
        (each) => each.type === "Trailer"
      );
      const trailer = filterTrailer.length
        ? filterTrailer[0]
        : response.results[0];
      dispatch(addTrailer(trailer));
    } catch (error) {
      console.error("Error fetching trailer data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [movieId]); // Fetch data whenever movieId changes

  return trailer; // Optionally, you can return the trailer if needed in the component
};

export default useTrailer;
