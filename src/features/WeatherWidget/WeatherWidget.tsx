import styles from './WeatherWidget.less';
import { Card } from 'antd';
import IWeatherData from "../../api/interfaces/IWeatherData";

interface IProps {
    data: IWeatherData;
}

function WeatherWidget(props: IProps) {
    const { weather, wind, icon, temp, city } = props.data;
    return (
        <Card className={styles.card}>
            <div className='text-wrapper'>
                <h2>{city}</h2>
                <p>Weather: {weather}</p>
                <p>Temperature: {temp}C</p>
                <p>Wind: {wind} m/s</p>
            </div>
            <div className='img-wrapper'>
                <img src={icon} alt='' />
            </div>
        </Card>
    );
}

export default WeatherWidget;