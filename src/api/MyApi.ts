import IWeatherApi from "./interfaces/IWeatherApi";
import OpenWeatherMapApi from "./OpenWeatherMap/OpenWeatherMapApi";
import WeatherApi from "./WeatherApi/WeatherApi";
import WeatherBitApi from "./WeatherBit/WeatherBitApi";

const MyApi = {
    getApiList: (): Array<IWeatherApi> => {
        return [new OpenWeatherMapApi(), new WeatherApi(), new WeatherBitApi()]
    }
}

export default MyApi;