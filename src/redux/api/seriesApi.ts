import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import SeriesInterface, { SeriesDetailsInterface } from '../../types/Series';
import Video from '../../types/Video';

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
    getSeriesDetails: builder.query({
      query: (id: string) => `${id}?language=en-US`,
      transformResponse: (response: SeriesDetailsInterface) => response,
    }),
    getSerieTrailer: builder.query({
      query: (id: string) => `${id}/videos?language=en-US`,
      transformResponse: (response: Video) => response,
    }),
  }),
});

export const {
  useGetPopularSeriesQuery,
  useGetTopRatedSeriesQuery,
  useGetSeriesDetailsQuery,
  useGetSerieTrailerQuery,
} = seriesApi;
