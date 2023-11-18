import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
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
  }, []);
};

export default useTrailer;
