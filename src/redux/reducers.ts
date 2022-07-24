import { combineReducers } from "@reduxjs/toolkit";
import { postsReducer as posts } from "./reducers/posts/posts.reducer";
import { postsApi } from "./api/posts.api";
import { postalLookupReducer as postalLookup} from "./reducers/postalLookup/postalLookup.reducer";
import { postalLookupApi } from "./api/postalLookup.api";
import { countryListReducer as countryList } from "./reducers/countryList/countryList.reducer";
import { countryListApi } from "./api/countryList.api";
import { UniversitiesReducer as universities } from "./reducers/universities/universities.reducer";
import { universitiesApi } from "./api/universities.api";
import { uiReducer as ui } from "./reducers/ui.reducer";

export const rootReducer = combineReducers({
  posts,
  ui,
  postalLookup,
  countryList,
  universities,
  [postsApi.reducerPath]: postsApi.reducer,
  [postalLookupApi.reducerPath]: postalLookupApi.reducer,
  [countryListApi.reducerPath]: countryListApi.reducer,
  [universitiesApi.reducerPath]: universitiesApi.reducer,
});