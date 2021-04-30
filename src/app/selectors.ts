import IWeatherData from "../api/interfaces/IWeatherData";
import { RootState } from "./store";

export const selectCity = (state: RootState): string => state.weatherData.city;
export const selectWeatherData = (state: RootState): Array<IWeatherData> => state.weatherData.data;
export const selectLoadingState = (state: RootState): boolean => state.weatherData.isLoading;