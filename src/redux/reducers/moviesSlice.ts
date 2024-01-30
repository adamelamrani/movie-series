import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MovieDetails } from '../../types/Movies';
import { SeriesResult } from '../../types/Series';

interface Favourites {
  movies: Movie[];
  series: SeriesResult[];
}

const initialState: Favourites = {
  movies: [],
  series: [],
};

export const moviesSlice = createSlice({
  name: 'moviesReducerApi',
  initialState,
  reducers: {
    addMovieToFavourites: (
      state,
      action: PayloadAction<Movie | MovieDetails>,
    ) => {
      state.movies = [...state.movies, action.payload];
    },
    removeMovieFromFavourites: (state, action: PayloadAction<Movie>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id,
      );
    },
    addSeriesToFavourites: (state, action: PayloadAction<SeriesResult>) => {
      state.series = [...state.series, action.payload];
    },
    removeSeriesFromFavourites: (
      state,
      action: PayloadAction<SeriesResult>,
    ) => {
      state.series = state.series.filter(
        (series) => series.id !== action.payload.id,
      );
    },
  },
});

export const {
  addMovieToFavourites,
  removeMovieFromFavourites,
  addSeriesToFavourites,
  removeSeriesFromFavourites,
} = moviesSlice.actions;
export default moviesSlice.reducer;
