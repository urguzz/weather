import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import weatherDataReducer from './weatherData';

export const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer
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
