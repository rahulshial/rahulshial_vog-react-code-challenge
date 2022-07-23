import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostEntity } from '../reducers/Posts.type';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts',
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<PostEntity[], void>({
      query: () => ''
    }),
    getPostById: builder.query<PostEntity, number>({
      query: (id) => `/${id}`
    }),
    createPost: builder.mutation<PostEntity, {}>({
      query: (postBody) => ({
        url: '',
        method: 'POST',
        body: postBody,
      }),
    }),
    updatePostById: builder.mutation<PostEntity, PostEntity>({
      query: (postBody) => ({
        url: `/${postBody.id}`,
        method: 'PUT',
        body: postBody,
      }),
    }),
    deletePostById: builder.mutation<PostEntity, number>({
      query: (id: number) => ({
        url: `/${id}`,
        method: 'DELETE',
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