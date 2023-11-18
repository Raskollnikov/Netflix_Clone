import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useTrailer(movieId);
  if (!trailer) return;
  const { key } = trailer;
  // after key - > si=XYfKVi5pTCtBz6pM&controls=0&mute=1&modestbranding=1&disablekb=1&loop=1
  return (
    <iframe
      src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1&rel=0&controls=0&loop=1&showinfo=0&amp`}
      // title="YouTube video player"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      className="aspect-video w-full h-screen "
    ></iframe>
  );
};

export default VideoBackground;
