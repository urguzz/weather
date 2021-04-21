import IWeatherBitData from './WeatherBitData'
import type { IWeatherData } from '../MyApi'

const convert = (data: IWeatherBitData): IWeatherData | null => {
    let converted_data: IWeatherData | null;
    try {
        const { weather, city_name, temp, wind_spd } = data.data[0];
        converted_data = {
            weather: weather.description,
            city: city_name,
            temp: Math.round(temp).toString(),
            wind: Math.round(wind_spd).toString(),
            icon: `https://www.weatherbit.io/static/img/icons/${weather.icon}.png`
        }
    }
    catch {
        converted_data = null;
    }
    return converted_data;
}

export default convert;