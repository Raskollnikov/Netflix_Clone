import lang from "../utils/LanguageConstants";
import { useSelector } from "react-redux";

function GptSearchBar() {
  let langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          placeholder={lang[langKey].placeholder}
          type="text"
          className="p-4 m-4 col-span-9"
        />
        <button className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
