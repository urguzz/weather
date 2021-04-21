import styles from './WeatherWidget.less';
import { Card } from 'antd';
import { IWeatherData } from '../../api/MyApi';

interface IProps {
    data: IWeatherData;
}

function WeatherWidget(props: IProps) {
    return (
        <Card className={styles.card}>
            <div className='text-wrapper'>
                <h2>{props.data.city}</h2>
                <h3>Temperature: {props.data.temp}C</h3>
                <h3>Weather: {props.data.weather}</h3>
            </div>
            <div className='img-wrapper'>
                <img src={props.data.icon} alt='' />
            </div>
        </Card>
    );
}

export default WeatherWidget;