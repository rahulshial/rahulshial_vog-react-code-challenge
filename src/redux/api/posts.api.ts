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
    getAllPosts: builder.query<PostEntity[], void>({
      query: () => 'https://jsonplaceholder.typicode.com/posts'
    }),
    getPostById: builder.query<PostEntity, number>({
      query: (id) => `https://jsonplaceholder.typicode.com/posts/${id}`
    }),
    createPost: builder.mutation<PostEntity, {}>({
      query: (postBody) => ({
        url: 'https://jsonplaceholder.typicode/posts',
        method: 'POST',
        body: postBody,
      }),
    }),
    updatePostById: builder.mutation<PostEntity, PostEntity>({
      query: (postBody) => ({
        url: `https://jsonplaceholder.typicode/posts/${postBody.id}`,
        method: 'PUT',
        body: postBody,
      }),
    }),
    deletePostById: builder.mutation<PostEntity, number>({
      query: (id: number) => ({
        url: `https://jsonplaceholder.typicode/posts/${id}`,
        method: 'POST',
        body: id,
      }),
    }),
  })
});

export const {
  useGetAllPostsQuery,
  useLazyGetAllPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostByIdMutation,
  useDeletePostByIdMutation,
} = postsApi;