import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Test() {
  const navigate = useNavigate();

  const movies = useSelector((movies) => movies.movies);

  const testovichi = [
    movies.nowPlayingMovies,
    ...movies.popularMovies,
    ...movies.topRated,
    ...movies.upcoming,
  ];

  const { id } = useParams();

  useTrailer(id);

  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const { key } = trailer;

  const item = testovichi?.filter((each) => each.id == id);

  const navigateToBrowsePage = () => {
    navigate("/browse");
  };
  if (item.length == 0) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center text-2xl">
        Trailer doesn't found :(
      </div>
    );
  }
  const { original_title, overview, release_date, vote_average } = item[0];

  return (
    <div className="sticky">
      <iframe
        src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1&rel=0&controls=0&loop=1&showinfo=0&amp;vq=hd1080?modestbranding=1&showinfo=0&showinfo=0 `}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full h-screen object-cover pointer-events-none absolute"
      ></iframe>

      <div className="absolute text-white flex top-20 flex-col gap-3   ml-20">
        <button
          className="bg-transparent text-white bg-black opacity-70 mb-8 border flex items-center uppercase max-w-[120px] gap-2 py-2 px-2 rounded-md cursor-pointer"
          onClick={navigateToBrowsePage}
        >
          <FaArrowLeft />
          go Home
        </button>

        <span className="bg-transparent text-white text-center border uppercase max-w-[100px] py-2 px-2 rounded-md cursor-pointer">
          {" "}
          HD 720p
        </span>
        <p className="text-xl lg:text-5xl w-[600px]">{original_title}</p>
        <p className="text-sm w-[300px]">{overview}</p>

        <p className="text-white">{release_date.slice(0, 4)}</p>
        <p className="flex gap-1 items-center ">
          {vote_average.toFixed(2)}
          <FaStar className="text-green-500" />
        </p>
      </div>
    </div>
  );
}

export default Test;
