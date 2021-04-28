import { IWeatherData } from '../MyApi';
import WeatherApiData from './WeatherApiData'

const convert = (data: WeatherApiData): IWeatherData | null => {
    const convertKphToMps = (wind_kph: number): number => {
        const coeff = 0.28;
        return wind_kph * coeff;
    }

    let converted_data: IWeatherData | null;
    try {
        const { condition, temp_c, wind_kph } = data.current;
        converted_data = {
            weather: condition.text,
            city: data.location.name,
            temp: Math.round(temp_c).toString(),
            wind: Math.round(convertKphToMps(wind_kph)).toString(),
            icon: condition.icon
        }
    }
    catch {
        converted_data = null;
    }
    return converted_data;
}

export default convert;