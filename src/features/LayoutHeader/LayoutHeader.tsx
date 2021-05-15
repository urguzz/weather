import { Layout } from "antd";
import { observer } from "mobx-react-lite";

import InputField from "../InputField/InputField";
import { WeatherStore } from "../../app/store";

import styles from "./LayoutHeader.less";

interface IProps {
  store: WeatherStore;
}

function LayoutHeader(props: IProps) {
  return (
    <Layout.Header className={styles.header}>
      <InputField store={props.store} />
    </Layout.Header>
  );
}

export default observer(LayoutHeader);
