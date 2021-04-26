import styles from './InputField.less';
import { Input } from "antd";
import { useAppDispatch } from '../../app/hooks';
import { selectLoadingState, setCity } from '../../app/weatherData';
import { useSelector } from 'react-redux';

function InputField() {
    const dispatch = useAppDispatch();
    const loadingSate = useSelector(selectLoadingState);

    return (
        <div className={styles.search}>
            <Input.Search
                placeholder="City..."
                onSearch={value => dispatch(setCity(value))}
                loading={loadingSate} />
        </div>
    );
}

export default InputField;