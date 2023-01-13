import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Root } from 'react-dom/client';
import { RootState } from '../../app/store';

export interface AshbrookState {
  name: string;
  status: number;
  surveyed: boolean;
}

const initialState: AshbrookState = {
  name: 'Ashbrook',
  status: 0,
  surveyed: false,
}

export const ashbrookSlice = createSlice({
  name: 'ashbrook',
  initialState,
  reducers: {
    incrementStatus: (state, action: PayloadAction<number>) => {
      state.status += action.payload;
    },
    changeSurveyed: (state) => {
      state.surveyed = true;
    }
  }
});

export const { incrementStatus, changeSurveyed } = ashbrookSlice.actions;

export const selectName = (state: RootState) => state.ashbrook.name;
export const selectStatus = (state: RootState) => state.ashbrook.status;
export const selectSurveyed = (state: RootState) => state.ashbrook.surveyed;

export default ashbrookSlice.reducer;