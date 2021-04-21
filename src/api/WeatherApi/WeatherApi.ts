import convert from './WeatherApiConverter'
import type { IWeatherApi, IWeatherData } from '../MyApi'

class WeatherApi implements IWeatherApi {
    getWeatherByCity(city: string): Promise<IWeatherData | null> {
        return fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_API_KEY}&q=${city}&aqi=no`)
            .then((response => response.json()))
            .then((data) => convert(data))
            .catch(() => null);
    }
}

export default WeatherApi;