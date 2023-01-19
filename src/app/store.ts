import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'

import cartographerReducer from '../features/cartographer/cartographerSlice';
import northridgeReducer from '../features/realms/northridgeSlice';
import goblinReducer from '../features/npcs/goblinSlice';
import ashbrookReducer from '../features/realms/ashbrookSlice';
import koboldReducer from '../features/npcs/koboldSlice';

const persistConfig = {
  key: "root",
  storage
};

const reducer = combineReducers({
  cartographer: cartographerReducer,
  northridge: northridgeReducer,
  ashbrook: ashbrookReducer,
  goblin: goblinReducer,
  kobold: koboldReducer,
})

const persistedReducer =  persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
