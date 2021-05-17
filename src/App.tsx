import { Layout } from "antd";

import LayoutContent from "./components/LayoutContent/LayoutContent";
import LayoutHeader from "./components/LayoutHeader/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter/LayoutFooter";
import { WeatherStore } from "./store";

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
