import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UniversitiesEntity } from '../reducers/universities/universities.type';

export const universitiesApi = createApi({
  reducerPath: 'universitiesApi',
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://universities.hipolabs.com',
  }),
  endpoints: (builder) => ({
    getUniversitiesByCountry: builder.query<UniversitiesEntity, string>({
      query: (country) => `/search?country=${country}`
    }),
  })
});

export const {
  useGetUniversitiesByCountryQuery,
} = universitiesApi;