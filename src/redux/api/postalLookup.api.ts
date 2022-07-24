import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostalLookupEntity } from '../reducers/postalLookup.type';

export const postalLookupApi = createApi({
  reducerPath: 'postalLookupApi',
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.zippopotam.us/us',
  }),
  endpoints: (builder) => ({
    getAreaDetailsByPostalCode: builder.query<PostalLookupEntity, number | string | undefined>({
      query: (id) => `/${id}`
    }),
  })
});

export const {
useGetAreaDetailsByPostalCodeQuery
} = postalLookupApi;