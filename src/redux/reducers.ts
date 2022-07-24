import { combineReducers } from "@reduxjs/toolkit";
import { postsReducer as posts } from "./reducers/posts.reducer";
import { postalLookupReducer as postalLookup} from "./reducers/postalLookup.reducer";
import { postalLookupApi } from "./api/postalLookup.api";
import { postsApi } from "./api/posts.api";
import { uiReducer as ui } from "./reducers/ui.reducer";

export const rootReducer = combineReducers({
  posts,
  ui,
  postalLookup,
  [postsApi.reducerPath]: postsApi.reducer,
  [postalLookupApi.reducerPath]: postalLookupApi.reducer,
});