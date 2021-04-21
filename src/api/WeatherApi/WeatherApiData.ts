export default interface IWeatherApiData {
    location: {
        name: string
    },
    current: {
        condition: {
            text: string,
            icon: string
        },
        main: string,
        temp_c: number,
        wind_kph: number
    }
}