const { createSlice } = require("@reduxjs/toolkit");

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    trailerVideo: null,
    addTopRatedMovies: null,
    addUpcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.addTopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.addUpcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
