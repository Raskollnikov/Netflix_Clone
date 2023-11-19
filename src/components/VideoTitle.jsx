import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  const [show, setShow] = useState(true);

  const handleShow = () => setShow((show) => !show);
  return (
    <div className="px-24 pt-24  absolute text-white z-5 bg-gradient-to-r from-black h-screen aspect-video w-screen">
      <div className="flex flex-col justify-end h-[60%]">
        <h1
          className="text-5xl font-bold"
          title="See the description"
          onClick={handleShow}
        >
          {title}
        </h1>

        <p className="text-lg py-6 w-1/4">{show && overview.slice(0, 100)}</p>
        <div className="flex gap-3">
          <button className="flex font-bold items-center gap-1 px-10 p-4 text-lg  bg-gray-400 text-black bg-opacity-50 rounded-lg ">
            <FaPlay />
            play
          </button>
          <button className="font-bold flex items-center gap-1 rounded-lg px-12 text-lg p-4 border text-white bg-transparent">
            <GoInfo size={25} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
