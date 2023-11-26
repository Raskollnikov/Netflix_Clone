import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ original_title, poster_path }) => {
  // lastly added, if not poster it does not show this card
  if (!poster_path) return null;
  return (
    <div className=" w-48 pr-4">
      <img className="w-48" src={IMG_CDN + poster_path} alt={original_title} />
    </div>
  );
};

export default MovieCard;
