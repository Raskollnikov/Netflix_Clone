import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow((show) => !show);
  return (
    <div
      className="md:px-24 px-6 pt-[50%] xl:pt-[10%] md:pt-[5%]  absolute text-white z-5
     bg-gradient-to-r from-black h-screen aspect-video w-[100%]"
    >
      <div className="flex flex-col justify-end h-[60%] gap-5 xl:gap-1">
        <h1
          className="md:text-4xl font-bold cursor-pointer text-2xl"
          title="See the description"
          onClick={handleShow}
        >
          {title}
        </h1>{" "}
        <p className="hidden lg:block md:text-lg  py-6 w-[70%] lg:w-[40%]">
          {show && overview.slice(0, 151)}
        </p>
        <div className="flex gap-3 flex-wrap w-[70%] md:w-[70%]">
          <button className="flex  py-3 justify-center items-center gap-2 bg-gray-400 text-black bg-opacity-50 rounded-lg px-10 font-bold">
            <FaPlay />
            play
          </button>
          <button
            className="hidden  md:flex  rounded-lg items-center gap-2
            px-8 py-4  border text-white bg-transparent "
          >
            More <GoInfo size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
