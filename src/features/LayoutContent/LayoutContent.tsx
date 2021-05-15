import { observer } from "mobx-react-lite";
import { Layout } from "antd";

import WarningField from "../WarningField/WarningField";
import WidgetList from "../WidgetList/WidgetList";
import LoaderSpin from "../LoaderSpin/LoaderSpin";
import { WeatherStore } from "../../app/store";

import styles from "./LayoutContent.less";

interface IProps {
  store: WeatherStore;
}

function LayoutContent(props: IProps) {
  const { city, isLoading, dataCount } = props.store;

  const chooseContent = () => {
    if (isLoading) {
      return <LoaderSpin />;
    } else if (!city) {
      return <WarningField text="Let's search!" />;
    } else if (!dataCount) {
      return <WarningField text="Nothing was found :(" />;
    }
    return <WidgetList store={props.store} />;
  };
  return (
    <Layout.Content className={styles.content}>
      {chooseContent()}
    </Layout.Content>
  );
}

export default observer(LayoutContent);
