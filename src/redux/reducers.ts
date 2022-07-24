import { combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "./api/posts.api";
import { postsReducer as posts } from "./reducers/posts.reducer";
import { uiReducer as ui } from "./reducers/ui.reducer";

export const rootReducer = combineReducers({
  posts,
  ui,
  [postsApi.reducerPath]: postsApi.reducer,
});