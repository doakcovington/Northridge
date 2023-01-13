import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Root } from 'react-dom/client';
import { RootState } from '../../app/store';

export interface KoboldState {
  name: string;
  health: number;
  attack: number;
  spawned: boolean;
}

const initialState: KoboldState = {
  name: 'Kobold',
  health: 10,
  attack: 2,
  spawned: false,
}

export const koboldSlice = createSlice({
  name: 'kobold',
  initialState,
  reducers: {
    decrementKoboldHealth: (state, action: PayloadAction<number>) => {
      state.health -= action.payload;
    }
  }
})

export const {decrementKoboldHealth} = koboldSlice.actions;

export const selectKoboldHealth = (state: RootState) => state.kobold.health;
export const selectAttack = (state: RootState) => state.kobold.attack;
export const selectName = (state: RootState) => state.kobold.name;
export const selectSpawned = (state: RootState) => state.kobold.spawned;

export default koboldSlice.reducer;