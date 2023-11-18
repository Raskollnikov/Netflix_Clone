import React from "react";
import { FaPlay } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    // addedlast
    <div className="px-24 pt-24 absolute text-white z-5 bg-gradient-to-r from-black h-screen aspect-video w-screen">
      <h1 className="text-6xl font-bold">{title}</h1>

      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div className="flex gap-3">
        <button className="flex font-bold items-center gap-1 px-10 p-4 text-lg  bg-gray-500 text-black bg-opacity-50 rounded-lg ">
          <FaPlay />
          play
        </button>
        <button className="font-bold rounded-lg px-12 text-lg p-4 bg-black text-white ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
