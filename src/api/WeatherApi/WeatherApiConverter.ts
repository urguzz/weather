import { IWeatherData } from '../MyApi';
import WeatherApiData from './WeatherApiData'

const convert = (data: WeatherApiData): IWeatherData | null => {
    let converted_data: IWeatherData | null;
    try {
        converted_data = {
            weather: data.current.condition.text,
            city: data.location.name,
            temp: Math.round(data.current.temp_c).toString(),
            icon: data.current.condition.icon
        }
    }
    catch {
        converted_data = null;
    }
    return converted_data;
}

export default convert;