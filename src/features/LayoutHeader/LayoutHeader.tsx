import styles from './LayoutHeader.less';
import { Layout } from 'antd';
import InputField from '../InputField/InputField';

function LayoutHeader() {
    return (
        <Layout.Header className={styles.header}>
            <InputField />
        </Layout.Header>
    );
}

export default LayoutHeader;