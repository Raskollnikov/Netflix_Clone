import lang from "../utils/LanguageConstants";
import { useSelector } from "react-redux";
import { useState } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

function GptSearchBar() {
  const [data, setData] = useState("");
  let langKey = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();

  // search movie in TMBD
  const searchMovieTMBD = async (movieName) => {
    const movieData = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const toJson = await movieData.json();
    return toJson.results;
  };

  const handleGptSearchClick = async (e) => {
    e.preventDefault();

    const gptQuery =
      "act as a movie recomendation system and suggest some movies for query " +
      data +
      ". only give me a names of 5 movies, comma separated. like this example result: Gadar, Sholay, Don, kingdom of heaven, avatar";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // Access the generated completions from the 'choices' property
    if (!gptResults.choices) return;

    // console.log(gptResults.choices[0].message?.content.split(","));
    const gptResult = gptResults.choices[0].message?.content.split(",");

    // for each movie search i am searching TMBD API
    // returns array of Promises :(((

    const moviesInformation = gptResult.map((each) => searchMovieTMBD(each));
    // [Promise, Promise, Promise, Promise, Promise]
    const tmbdResults = await Promise.all(moviesInformation);

    dispatch(
      addGptMovieResult({ movieNames: gptResult, movieResults: tmbdResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          placeholder={lang[langKey].placeholder}
          type="text"
          className="p-4 m-4 col-span-9"
          onChange={(e) => setData(e.target.value)}
        />
        <button
          className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
