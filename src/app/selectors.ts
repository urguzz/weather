import { IWeatherData } from "../api/MyApi";
import { RootState } from "./store";

export const selectCity = (state: RootState): string => state.weatherData.city;
export const selectWeatherData = (state: RootState): Array<IWeatherData> => state.weatherData.data;
export const selectLoadingState = (state: RootState): boolean => state.weatherData.isLoading;

export const selectTest = (state: RootState): string => state.test.test;