import { ReactElement } from "react";
import { observer } from "mobx-react-lite";
import { Row, Col } from "antd";
import { WeatherStore } from "../../store";

import WeatherWidget from "../WeatherWidget/WeatherWidget";

import styles from "./WidgetList.less";

interface IProps {
  store: WeatherStore;
}

function WidgetList(props: IProps) {
  const widgets: Array<ReactElement> = [];
  props.store.data?.forEach((item, index) => {
    widgets.push(
      <Col span={8} key={index} className={styles.widget}>
        <WeatherWidget data={item} />
      </Col>
    );
  });
  return (
    <Row gutter={16} justify="space-around" className={styles.widgetList}>
      {widgets}
    </Row>
  );
}

export default observer(WidgetList);
