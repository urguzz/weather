import { Layout } from "antd";

import styles from "./LayoutFooter.less";

function LayoutFooter() {
  return (
    <Layout.Footer className={styles.footer}>
      <span>2021</span>
    </Layout.Footer>
  );
}

export default LayoutFooter;
