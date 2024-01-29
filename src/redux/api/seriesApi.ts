import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import SeriesInterface from '../../types/Series';

export const seriesApi = createApi({
  reducerPath: 'seriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/tv/',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_TMDB_ACCES_TOKEN}`,
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPopularSeries: builder.query({
      query: () => 'popular',
      transformResponse: (response: SeriesInterface) => response,
    }),
    getTopRatedSeries: builder.query({
      query: () => 'top_rated',
      transformResponse: (response: SeriesInterface) => response,
    }),
  }),
});

export const { useGetPopularSeriesQuery, useGetTopRatedSeriesQuery } =
  seriesApi;
