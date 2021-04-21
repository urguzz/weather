import styles from './LayoutFooter.less';
import { Layout } from 'antd';

function LayoutFooter() {

    return (
        <Layout.Footer className={styles.footer}>
            <span>2021</span>
        </Layout.Footer>
    );
}

export default LayoutFooter;