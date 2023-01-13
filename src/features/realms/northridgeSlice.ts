import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Root } from 'react-dom/client';
import { RootState } from '../../app/store';

export interface NorthridgeState {
  name: string;
  status: number;
  surveyed: boolean;
}

const initialState: NorthridgeState = {
  name: 'Northridge',
  status: 0,
  surveyed: false,
}

export const northridgeSlice = createSlice({
  name: 'northridge',
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

export const { incrementStatus, changeSurveyed } = northridgeSlice.actions;

export const selectName = (state: RootState) => state.northridge.name;
export const selectStatus = (state: RootState) => state.northridge.status;
export const selectSurveyed = (state: RootState) => state.northridge.surveyed;

export default northridgeSlice.reducer;