import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  console.log("Entry Point" + 1);
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  //if movies is not present, early return
  console.log("Entry Point2: ", movies);
  if (!movies) return <></>;
  const mainMovie = movies[5];

  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
