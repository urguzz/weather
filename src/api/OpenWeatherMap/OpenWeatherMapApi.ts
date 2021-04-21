import convert from './OpenWeatherMapConverter'
import type { IWeatherApi, IWeatherData } from '../MyApi'

class OpenWeatherMapApi implements IWeatherApi {
    getWeatherByCity(city: string): Promise<IWeatherData | null> {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
            .then((response => response.json()))
            .then((data) => convert(data))
            .catch(() => null);
    }
}

export default OpenWeatherMapApi;