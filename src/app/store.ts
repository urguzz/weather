import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import testReducer, { TestState } from './test';
import weatherDataReducer, { WeatherState } from './weatherData';
import { StateType } from 'typesafe-actions'

export const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer,
    test: testReducer
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


export const combinedWeatherDataReducer = combineReducers({
  weatherData: weatherDataReducer
})
export const combinedTestReducer = combineReducers({
  test: testReducer
})
export type WeatherDataRootState = StateType<typeof combinedWeatherDataReducer>;
export type TestRootState = StateType<typeof combinedTestReducer>;