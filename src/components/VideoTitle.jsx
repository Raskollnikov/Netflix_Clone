import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  const [show, setShow] = useState(true);

  const handleShow = () => setShow((show) => !show);
  return (
    <div
      className=" md:px-24 px-6 pt-[50%] xl:pt-[10%] md:pt-[5%]  absolute text-white z-5 
     bg-gradient-to-r from-black h-screen aspect-video w-screen"
    >
      <div className="flex flex-col justify-end h-[60%] gap-5 xl:gap-1">
        <h1
          className="md:text-4xl font-bold cursor-pointer text-2xl"
          title="See the description"
          onClick={handleShow}
        >
          {title}
        </h1>

        <p className="hidden lg:block md:text-lg  py-6 w-[70%] lg:w-[40%]">
          {show && overview.slice(0, 151)}
        </p>
        <div className="flex gap-3 flex-wrap w-[70%] md:w-[70%]">
          <button
            className="flex font-bold justify-center items-center gap-2  px-10 py-3 md:px-10 md:py-4 text-lg
            bg-gray-400 text-black bg-opacity-50 rounded-lg lg:w-[20%]"
          >
            <FaPlay />
            play
          </button>
          <button
            className="hidden  font-bold  md:flex items-center justify-center gap-2 rounded-lg px-12 text-sm
           p-4 border text-white bg-transparent  lg:w-[20%]"
          >
            <GoInfo size={25} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
