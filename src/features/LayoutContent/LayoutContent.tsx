import styles from './LayoutContent.less';
import WarningField from '../WarningField/WarningField';
import { Layout } from 'antd';
import WidgetList from '../WidgetList/WidgetList';
import LoaderSpin from '../LoaderSpin/LoaderSpin';
import { useSelector } from 'react-redux';
import { selectLoadingState, selectCity, selectWeatherData } from '../../app/weatherData';
import { IWeatherData } from '../../api/MyApi';

function LayoutContent() {
    const data: Array<IWeatherData> = useSelector(selectWeatherData);
    const isLoading: boolean = useSelector(selectLoadingState);
    const city: string = useSelector(selectCity);

    const chooseContent = () => {
        if (isLoading) {
            return (
                <LoaderSpin />
            );
        } else if (!city) {
            return (
                <WarningField text="Let's search!" />
            );
        } else if (!data.length) {
            return (
                <WarningField text="Nothing was found :(" />
            );
        }
        return (
            <WidgetList />
        );
    }
    return (
        <Layout.Content className={styles.content}>
            {chooseContent()}
        </Layout.Content>
    );
}

export default LayoutContent;