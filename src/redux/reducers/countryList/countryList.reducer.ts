import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryListEntity } from './countryList.type';

export type CountryListState = CountryListEntity[];

const initialState: CountryListState = [];

export const countryListSlice = createSlice({
  name: 'countryList',
  initialState,
  reducers: {
    setCountrylist: (state, action: PayloadAction<CountryListState>) => {
      state = {...action.payload}
      return state
    },
    setCountry: (state, action: PayloadAction<CountryListState>) => {
      state = [...action.payload]
      return state
    },
  },
})

export const {
  setCountrylist,
  setCountry,
} = countryListSlice.actions;

export const countryListReducer = countryListSlice.reducer;