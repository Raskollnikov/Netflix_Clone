import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      // Uncomment the line below to dispatch the data to the Redux store
      dispatch(addTopRated(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
