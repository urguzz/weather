import styles from './WidgetList.less';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import { Row, Col } from 'antd';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectWeatherData } from '../../app/selectors';
import { useTest1Selector, useTest2Selector, useTest3Selector, useTest4Selector } from '../../app/hooks';
import { TestState } from '../../app/test';

function WidgetList() {
    const data = useSelector(selectWeatherData);
    const test12 = useTest1Selector(state => state);
    const test21 = useTest2Selector(state => state);
    const test3: TestState = useTest3Selector(state => state);
    const test4: TestState = useTest4Selector<TestState>((state: TestState) => state);
    const items: Array<ReactNode> = [];
    data?.forEach((item, index) => {
        items.push(
            <Col span={8} key={index} className={styles.widget}>
                <WeatherWidget data={item} />
            </Col>
        )
    });
    return (
        <>
            <div>{test12.test.test}</div>
            <div>{test12.test2.test}</div>
            <br />
            <div>{test21.test.test}</div>
            <div>{test21.test2.test}</div>
            <br />
            <div>{test3.test}</div>
            <br />
            <div>{test4.test}</div>
            <Row gutter={16} justify='space-around' className={styles.widgetList}>
                {items}
            </Row>
        </>
    );
}

export default WidgetList;