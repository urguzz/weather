import IWeatherBitData from './WeatherBitData'
import type { IWeatherData } from '../MyApi'

const convert = (data: IWeatherBitData): IWeatherData | null => {
    let converted_data: IWeatherData | null;
    try {
        converted_data = {
            weather: data.data[0].weather.description,
            city: data.data[0].city_name,
            temp: Math.round(data.data[0].temp).toString(),
            icon: `https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`
        }
    }
    catch {
        converted_data = null;
    }
    return converted_data;
}

export default convert;