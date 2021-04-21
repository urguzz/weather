export default interface IOpenWeatherMapData {
    weather: [
        {
            main: string,
            icon: string
        }
    ],
    main: {
        temp: number
    },
    wind: {
        speed: number
    },
    name: string,
}