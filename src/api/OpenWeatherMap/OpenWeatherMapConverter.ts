import IOpenWeatherMapData from './OpenWeatherMapData'
import type { IWeatherData } from '../MyApi'

const convert = (data: IOpenWeatherMapData): IWeatherData | null => {
    let converted_data: IWeatherData | null;
    try {
        const description = data.weather[0].description;
        converted_data = {
            weather: description[0].toUpperCase() + description.slice(1),
            city: data.name,
            temp: Math.round(data.main.temp).toString(),
            wind: Math.round(data.wind.speed).toString(),
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        }
    }
    catch {
        converted_data = null;
    }
    return converted_data;
}

export default convert;