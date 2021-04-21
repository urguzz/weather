import styles from './LayoutContent.less';
import WarningField from '../WarningField/WarningField';
import { Layout } from 'antd';
import { IWeatherData } from '../../api/MyApi';
import WidgetList from '../WidgetList/WidgetList';
import LoaderSpin from '../LoaderSpin/LoaderSpin';

interface IProps {
    data: Array<IWeatherData>;
    city: string;
    isLoading: boolean;
}

function LayoutContent(props: IProps) {
    const chooseContent = () => {
        if (props.isLoading) {
            return (
                <LoaderSpin />
            );
        } else if (!props.city) {
            return (
                <WarningField text="Let's search!" />
            );
        } else if (!props.data.length) {
            return (
                <WarningField text="Nothing was found :(" />
            );
        }
        return (
            <WidgetList
                data={props.data}
                city={props.city}
                isLoading={props.isLoading} />
        );
    }
    return (
        <Layout.Content className={styles.content}>
            {chooseContent()}
        </Layout.Content>
    );
}

export default LayoutContent;