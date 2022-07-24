import { combineReducers } from "@reduxjs/toolkit";
import { postsReducer as posts } from "./reducers/posts/posts.reducer";
import { postalLookupReducer as postalLookup} from "./reducers/postalLookup/postalLookup.reducer";
import { postalLookupApi } from "./api/postalLookup.api";
import { postsApi } from "./api/posts.api";
import { countryListReducer as countryList } from "./reducers/countryList/countryList.reducer";
import { countryListApi } from "./api/countryList.api";


export const rootReducer = combineReducers({
  posts,
  postalLookup,
  countryList,
  [postsApi.reducerPath]: postsApi.reducer,
  [postalLookupApi.reducerPath]: postalLookupApi.reducer,
  [countryListApi.reducerPath]: countryListApi.reducer,
});