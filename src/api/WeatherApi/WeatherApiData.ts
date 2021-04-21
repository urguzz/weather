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
        description: string,
        temp_c: number,
    },
    wind_mph: number,
}