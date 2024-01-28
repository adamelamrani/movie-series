import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movies } from '../../types/Movies';

export const moviesApi = createApi({
  reducerPath: 'moviesReducerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/movie/',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_TMDB_ACCES_TOKEN}`,
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => 'popular',
      transformResponse: (response: Movies) => response,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = moviesApi;
