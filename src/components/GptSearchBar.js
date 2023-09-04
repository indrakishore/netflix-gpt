import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // For each movie, i will search in TMDB Api
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log("json data: ", jsonData);
    return jsonData.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to gpt api and get movie results
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      "only give me the name of five movies, comma separated like the example result given ahead. Example Results: Gadar, Sholay, Don, OMG2, Dream Girl 2";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      console.log("Movie Not Found.");
    }
    console.log(gptResults.choices?.[0].message?.content);
    // Kabhi Kabhie, Amar Akbar Anthony, Silsila, Zanjeer, Disco Dancer
    const gptMovies = gptResults.choices?.[0].message?.content.split(",");
    // ["Kabhi Kabhie", "Amar Akbar Anthony", "Silsila", "Zanjeer", "Disco Dancer"]
    console.log("gptMovies", gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // ["promise", "promise", "promise", "promise", "promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log("lodus", tmdbResults);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
