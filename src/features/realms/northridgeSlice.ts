import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Root } from 'react-dom/client';
import { RootState } from '../../app/store';

export interface NorthridgeState {
  name: string;
  status: number;
  survyed: boolean;
}

const initialState: NorthridgeState = {
  name: 'Northridge',
  status: 0,
  survyed: false,
}

export const northridgeSlice = createSlice({
  name: 'northridge',
  initialState,
  reducers: {
    incrementStatus: (state, action: PayloadAction<number>) => {
      state.status += action.payload;
    },
    survyed: (state) => {
      state.survyed = true;
    }
  }
});

export const { incrementStatus, survyed } = northridgeSlice.actions;

export const selectName = (state: RootState) => state.northridge.name;
export const selectStatus = (state: RootState) => state.northridge.status;
export const selectSurvyed = (state: RootState) => state.northridge.survyed;

export default northridgeSlice.reducer;