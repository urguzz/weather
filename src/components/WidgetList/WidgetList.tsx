import styles from './WidgetList.less';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import { Row, Col } from 'antd';
import { ReactNode } from 'react';
import { IWeatherData } from '../../api/MyApi';

interface IProps {
    data: Array<IWeatherData>;
    city: string;
    isLoading: boolean;
}

function WidgetList(props: IProps) {
    const items: Array<ReactNode> = [];
    props.data?.forEach((item, index) => {
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