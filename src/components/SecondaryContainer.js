import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-48 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.addUpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
