import styles from './WidgetList.less';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import { Row, Col } from 'antd';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectWeatherDataState, selectTestState, selectTestStateOnly } from '../../app/selectors';

function WidgetList() {
    const weatherState = useSelector(selectWeatherDataState);
    const test = useSelector(selectTestState);
    const testOnly = useSelector(selectTestStateOnly);
    const items: Array<ReactNode> = [];
    weatherState.data?.forEach((item, index) => {
        items.push(
            <Col span={8} key={index} className={styles.widget}>
                <WeatherWidget data={item} />
            </Col>
        )
    });
    return (
        <>
            <div>{test.test}</div>
            <div>{testOnly.test.test}</div>
            <Row gutter={16} justify='space-around' className={styles.widgetList}>
                {items}
            </Row>
        </>
    );
}

export default WidgetList;