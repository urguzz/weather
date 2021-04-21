export default interface IOpenWeatherMapData {
    weather: [
        {
            description: string,
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