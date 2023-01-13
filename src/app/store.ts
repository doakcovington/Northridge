import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartographerReducer from '../features/cartographer/cartographerSlice';
import northridgeReducer from '../features/realms/northridgeSlice';
import goblinReducer from '../features/npcs/goblinSlice';
import ashbrookReducer from '../features/realms/ashbrookSlice';
import koboldReducer from '../features/npcs/koboldSlice';

export const store = configureStore({
  reducer: {
    cartographer: cartographerReducer,
    northridge: northridgeReducer,
    ashbrook: ashbrookReducer,
    goblin: goblinReducer,
    kobold: koboldReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
