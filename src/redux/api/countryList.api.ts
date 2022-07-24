import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CountryListEntity } from '../reducers/countryList/countryList.type';

export const countryListApi = createApi({
  reducerPath: 'countryListApi',
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1',
  }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<CountryListEntity[], void>({
      query: () => '/all'
    }),
  })
});

export const {
useGetAllCountriesQuery,
} = countryListApi;