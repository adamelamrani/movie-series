import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    setMovies: (state, action: PayloadAction<Movies>) => {
      state.results = action.payload.results;
      state.page = action.payload.page;
      state.total_pages = action.payload.total_pages;
      state.total_results = action.payload.total_results;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
