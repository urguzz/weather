import { Layout } from "antd";

import LayoutContent from "./features/LayoutContent/LayoutContent";
import LayoutHeader from "./features/LayoutHeader/LayoutHeader";
import LayoutFooter from "./features/LayoutFooter/LayoutFooter";
import { WeatherStore } from "./app/store";

import styles from "./App.less";

function App() {
  const store = new WeatherStore();
  return (
    <div className={styles.App}>
      <Layout>
        <LayoutHeader store={store} />
        <LayoutContent store={store} />
        <LayoutFooter />
      </Layout>
    </div>
  );
}

export default App;
