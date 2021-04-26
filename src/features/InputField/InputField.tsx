import styles from './InputField.less';
import { Input } from "antd";
import { useAppDispatch } from '../../app/hooks';
import { selectLoadingState } from '../../app/selectors';
import { useSelector } from 'react-redux';
import { setCity } from '../../app/weatherData';

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