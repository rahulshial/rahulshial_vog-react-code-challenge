import { combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "./api/posts.api";
import { postsReducer as posts } from "./reducers/posts.reducer";

export const rootReducer = combineReducers({
  posts,
  [postsApi.reducerPath]: postsApi.reducer,
});