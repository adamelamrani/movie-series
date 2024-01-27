import { createSlice } from '@reduxjs/toolkit';
import { Movies } from '../../types/Movies';

const initialState: Movies = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const moviesSlice = createSlice({
  name: 'moviesReducerApi',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.results = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
