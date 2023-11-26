import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants.js";

function GptSearch() {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt={"loginPage_image"} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
