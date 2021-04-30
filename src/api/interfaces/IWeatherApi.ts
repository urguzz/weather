import IWeatherData from "./IWeatherData";

export default interface IWeatherApi {
    getWeatherByCity(city: string): Promise<IWeatherData | null>;
}
