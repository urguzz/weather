import OpenWeatherMapApi from "./OpenWeatherMap/OpenWeatherMapApi";
import WeatherApi from "./WeatherApi/WeatherApi";
import WeatherBitApi from "./WeatherBit/WeatherBitApi";

interface IWeatherApi {
    getWeatherByCity(city: string): Promise<IWeatherData | null>
}

interface IWeatherData {
    weather: string,
    city: string,
    temp: string,
    icon: string
}

const MyApi = {
    getApiList: (): Array<IWeatherApi> => {
        return [new OpenWeatherMapApi(), new WeatherApi(), new WeatherBitApi()]
    }
}

export default MyApi;
export type {
    IWeatherApi,
    IWeatherData
};
