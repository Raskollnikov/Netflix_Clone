import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const useGetTrailer = (movieId) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const response = await data.json();
    // const results = response.results();

    const trailer = response.results.filter((each) => each.type == "Trailer");
    setData(trailer);
  };
  useEffect(() => {
    getData();
  }, []);

  return { data };
};
const VideoBackground = ({ movieId }) => {
  const test = useGetTrailer(movieId);
  return <div>{movieId}</div>;
};

export default VideoBackground;
