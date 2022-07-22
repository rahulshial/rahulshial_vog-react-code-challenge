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
  name: 'post',
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<PostsState>) => {
      return {...state, ...action.payload}
    },
    updatePost: (state, action: PayloadAction<PostEntity>) => {
      return { ...state, ...action.payload }
    },
    deletePost: (state, {payload: id}: PayloadAction<number | null>) => {
      console.log(state)
      //@ts-ignore
      return state.posts.filter(item => item.id === id)
    }
  },
})

export const {
  setPostList,
  updatePost,
  deletePost,
} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;