import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostEntity } from '../reducers/Posts.type';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostEntity[], void>({
      query: () => 'https://jsonplaceholder.typicode.com/posts'
    })
  })
});

export const {
  useGetPostsQuery,
} = postsApi;