import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import SeriesInterface from '../../types/Series';

export const multiApi = createApi({
  reducerPath: 'multiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/search/multi',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_TMDB_ACCES_TOKEN}`,
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAnyResult: builder.mutation({
      query: (query) => `?query=${query}`,
      transformResponse: (response: SeriesInterface) => response,
    }),
  }),
});

export const { useGetAnyResultMutation } = multiApi;
