import convert from './WeatherBitConverter'
import type { IWeatherApi, IWeatherData } from '../MyApi'

class WeatherBitApi implements IWeatherApi {
    async getWeatherByCity(city: string): Promise<IWeatherData | null> {
        return await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`)
            .then((response => response.json()))
            .then((data) => convert(data))
            .catch(() => null);
    }
}

export default WeatherBitApi;