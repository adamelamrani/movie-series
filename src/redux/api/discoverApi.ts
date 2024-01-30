import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import SeriesInterface from '../../types/Series';

export const discoverApi = createApi({
  reducerPath: 'discoverApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_TMDB_ACCES_TOKEN}`,
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSeriesRecomendations: builder.query({
      query: (id: string) => `tv/${id}/recommendations?language=en-US&page=1`,
      transformResponse: (response: SeriesInterface) => response,
    }),

    getMoviesRecomendations: builder.query({
      query: (id: string) =>
        `movie/${id}/recommendations?language=en-US&page=1`,
      transformResponse: (response: SeriesInterface) => response,
    }),
  }),
});

export const { useGetSeriesRecomendationsQuery } = discoverApi;
