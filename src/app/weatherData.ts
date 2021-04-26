import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MyApi, { IWeatherData } from '../api/MyApi';
import { AppDispatch, RootState } from './store';

export interface WeatherState {
    data: Array<IWeatherData>;
    city: string;
    isLoading: boolean;
}

const initialState: WeatherState = {
    data: [],
    city: '',
    isLoading: false
};

export const setCity = createAsyncThunk<string, string, { dispatch: AppDispatch }>(
    "weatherData/setCity",
    async (city: string, { dispatch }) => {
        dispatch(setData(city));
        return city;
    },
    {
        condition: (city, { getState }) => {
            const state = getState() as RootState;
            if (city === state.weatherData.city) {
                return false
            }
        }
    }
);

export const setData = createAsyncThunk<Array<IWeatherData>, string, { dispatch: AppDispatch }>(
    "weatherData/setData",
    async (city, { dispatch }) => {
        const data: Array<IWeatherData> = [];
        const apis: Array<Promise<IWeatherData | null>> = [];
        MyApi.getApiList().forEach(api => apis.push(api.getWeatherByCity(city)));
        await Promise.all(apis)
            .then(resultArray => resultArray.forEach(result => {
                if (result)
                    data.push(result)
            }))
        return data;
    }
);

export const weatherDataSlice = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {
        setLoadingState: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setData.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(setData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        builder.addCase(setCity.fulfilled, (state, action) => {
            state.city = action.payload;
        })
    },
});
export const selectCity = (state: RootState): string => state.weatherData.city;
export const selectWeatherData = (state: RootState): Array<IWeatherData> => state.weatherData.data;
export const selectLoadingState = (state: RootState): boolean => state.weatherData.isLoading;
export default weatherDataSlice.reducer;