import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostalLookupEntity } from './postalLookup.type';

export type PostalLookupState = PostalLookupEntity;

const initialState: PostalLookupState = {
  'post code': '',
  country: '',
  'country abbreviation': '',
  places: [    {
    "place name": '',
    "longitude": '',
    "state": '',
    "state abbreviation": '',
    "latitude": ''
  }]
};

export const postalLookupSlice = createSlice({
  name: 'postalLookup',
  initialState,
  reducers: {
    setAreaDetailsByPostalCode: (state, action: PayloadAction<PostalLookupState>) => {
      state = {...action.payload}
      return state
    },
  },
})

export const {
  setAreaDetailsByPostalCode,
} = postalLookupSlice.actions;

export const postalLookupReducer = postalLookupSlice.reducer;