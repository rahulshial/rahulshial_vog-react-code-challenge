import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostEntity } from './Posts.type';

export type PostsState = PostEntity[];

const initialState: PostsState = [];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<PostsState>) => {
      state = [...state, ...action.payload]
      return state
    },
    setPostListById: (state, action: PayloadAction<PostsState>) => {
      state = [...action.payload]
      return state
    },
    createPost: (state, action: PayloadAction<PostEntity>) => {
      state = [...state, action.payload]
      return state
    },
    updatePost: (state, action: PayloadAction<PostEntity>) => {
      // state = [...state, ...action.payload]
      // return { ...state, ...action.payload }
    },
    deletePost: (state, {payload: id}: PayloadAction<number | null>) => {
      const updatedState = state.filter((item) => item.id !== id)
      state = [...updatedState]
      return state
    }
  },
})

export const {
  setPostList,
  setPostListById,
  createPost,
  updatePost,
  deletePost,
} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;