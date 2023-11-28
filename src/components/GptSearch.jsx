import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants.js";

function GptSearch() {
  return (
    <>
      <div className="fixed w-full overflow-hidden -z-10">
        <img
          className="h-screen w-full object-cover"
          src={BG_URL}
          alt={"loginPage_image"}
        />
      </div>

      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch;
