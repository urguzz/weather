import styles from './LayoutHeader.less';
import { Layout } from 'antd';
import InputField from '../InputField/InputField';

interface IProps {
    onCityChange: (e: string) => void;
    isLoading: boolean;
}

function LayoutHeader(props: IProps) {

    return (
        <Layout.Header className={styles.header}>
            <InputField
                onCityChange={props.onCityChange}
                isLoading={props.isLoading} />
        </Layout.Header>
    );
}

export default LayoutHeader;