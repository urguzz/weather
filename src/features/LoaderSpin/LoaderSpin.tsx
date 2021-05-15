import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

import styles from "./LoaderSpin.less";

function LoaderSpin() {
  const icon = <Loading3QuartersOutlined style={{ fontSize: 100 }} spin />;
  return (
    <div className={styles.wrapper}>
      <Spin size="large" className={styles.spin} indicator={icon} />
    </div>
  );
}

export default LoaderSpin;
