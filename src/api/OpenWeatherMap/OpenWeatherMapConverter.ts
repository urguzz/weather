import IOpenWeatherMapData from './OpenWeatherMapData'
import type { IWeatherData } from '../MyApi'

const convert = (data: IOpenWeatherMapData): IWeatherData | null => {
    let converted_data: IWeatherData | null;
    try {
        converted_data = {
            weather: data.weather[0].main,
            city: data.name,
            temp: Math.round(data.main.temp).toString(),
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        }
    }
    catch {
        converted_data = null;
    }
    return converted_data;
}

export default convert;