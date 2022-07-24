import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostEntity } from './posts/Posts.type';

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
      state = [...state, action.payload]
      const updatedState = state.map((post) => {
        if(post.id === action.payload.id) {
          return action.payload
        } else {
          return post
        }
      })
      state = [...updatedState]
      return state
    },
    deletePost: (state, {payload: id}: PayloadAction<number>) => {
      const updatedState = state.filter((post) => post.id !== id)
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