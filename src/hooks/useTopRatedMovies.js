import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  // Fetch Data from TMDB API and update changes
  const dispatch = useDispatch();
  const useTopRatedMovies = useSelector(
    (store) => store.movies.addTopRatedMovies
  );
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addTopRatedMovies(jsonData.results));
  };

  useEffect(() => {
    !useTopRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
