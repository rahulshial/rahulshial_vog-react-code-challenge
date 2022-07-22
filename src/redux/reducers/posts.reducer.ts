import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostEntity } from './Posts.type';

export type PostsState = PostEntity;

const initialState: PostsState = {
  userId: null,
  id: null,
  title: null,
  body: null,
}

export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPostList: (state, action: PayloadAction<PostEntity[]>) => {
      return { ...state }
    },
    updatePost: (state, action: PayloadAction<PostEntity>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const {
  getPostList,
  updatePost,
} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;