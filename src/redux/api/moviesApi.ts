import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movies } from '../../types/Movies';

// Define a service using a base URL and expected endpoints
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
    getPopularMovies: builder.query<Movies, string>({
      query: () => 'popular',
    }),

    getTopRatedMovies: builder.query<Movies, string>({
      query: () => 'top_rated',
    }),

    getUpcomingMovies: builder.query<Movies, string>({
      query: () => 'upcoming',
    }),

    getNowPlayingMovies: builder.query<Movies, string>({
      query: () => 'now_playing',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPopularMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} = moviesApi;
