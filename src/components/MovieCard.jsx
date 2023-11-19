import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ original_title, poster_path }) => {
  return (
    <div className=" w-48 pr-4">
      <img className="w-48" src={IMG_CDN + poster_path} alt={original_title} />
    </div>
  );
};

export default MovieCard;
