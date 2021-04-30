import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import testReducer from './test';
import weatherDataReducer from './weatherData';
import test2Reducer from './test2';

export const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer,
    test: testReducer,
    test2: test2Reducer
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

export const combinedTestReducer = combineReducers({
  test: testReducer,
  test2: test2Reducer
})
export type Test1RootState = ReturnType<typeof combinedTestReducer>;
export type Test2RootState = ReturnType<typeof testReducer>;