export default interface IWeatherBitData {
    data: [
        {
            weather:
            {
                description: string,
                icon: string
            },
            temp: number,
            wind_spd: number,
            city_name: string,
        }
    ]
}