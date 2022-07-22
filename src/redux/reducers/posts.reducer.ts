import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostEntity } from './Posts.type';

export type PostsState = PostEntity[];

const initialState: PostsState = [{
  userId: null,
  id: null,
  title: null,
  body: null,
}]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<PostsState>) => {
      return {...state, ...action.payload}
    },
    updatePost: (state, action: PayloadAction<PostEntity>) => {
      return { ...state, ...action.payload }
    },
    deletePost: (state, {payload: id}: PayloadAction<number | null>) => {
      //@ts-ignore
      console.log(state.posts)
      return {...state}
    }
  },
})

export const {
  setPostList,
  updatePost,
  deletePost,
} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;