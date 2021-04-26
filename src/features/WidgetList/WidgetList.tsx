import styles from './WidgetList.less';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import { Row, Col } from 'antd';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectWeatherData } from '../../app/weatherData';

function WidgetList() {
    const data = useSelector(selectWeatherData);
    const items: Array<ReactNode> = [];
    data?.forEach((item, index) => {
        items.push(
            <Col span={8} key={index} className={styles.widget}>
                <WeatherWidget data={item} />
            </Col>
        )
    });
    return (
        <Row gutter={16} justify='space-around' className={styles.widgetList}>
            {items}
        </Row>
    );
}

export default WidgetList;