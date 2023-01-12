import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartographerReducer from '../features/cartographer/cartographerSlice';
import northridgeReducer from '../features/realms/northridgeSlice';

export const store = configureStore({
  reducer: {
    cartographer: cartographerReducer,
    northridge: northridgeReducer,
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
