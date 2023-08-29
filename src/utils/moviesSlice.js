const { createSlice } = require("@reduxjs/toolkit");

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
