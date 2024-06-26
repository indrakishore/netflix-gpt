import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  // Fetch Data from TMDB API and update changes
  const dispatch = useDispatch();
  const useUpcomingMovies = useSelector(
    (store) => store.movies.addUpcomingMovies
  );
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    !useUpcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
