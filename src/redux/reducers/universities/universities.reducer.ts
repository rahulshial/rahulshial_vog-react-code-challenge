import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UniversitiesEntity } from './universities.type';

export type UniversitiesState = UniversitiesEntity[];

const initialState: UniversitiesState = [];

export const universitiesSlice = createSlice({
  name: 'Universities',
  initialState,
  reducers: {
    setUniversitiesByCountry: (state, action: PayloadAction<UniversitiesState>) => {
      state = [...state, ...action.payload]
      return state
    },
  },
})

export const {
  setUniversitiesByCountry,
} = universitiesSlice.actions;

export const UniversitiesReducer = universitiesSlice.reducer;