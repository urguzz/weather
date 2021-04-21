import styles from './InputField.less';
import { Input } from "antd";

interface IProps {
    onCityChange: (e: string) => void;
    isLoading: boolean;
}

function InputField(props: IProps) {
    const onSearch = (value: string) => {
        props.onCityChange(value);
    }

    return (
        <div className={styles.search}>
            <Input.Search placeholder="City..." onSearch={onSearch} loading={props.isLoading} />
        </div>
    );
}

export default InputField;