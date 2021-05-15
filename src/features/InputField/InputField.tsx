import { Input } from "antd";

import { WeatherStore } from "../../app/store";

import styles from "./InputField.less";

interface IProps {
  store: WeatherStore;
}

function InputField(props: IProps) {
  const { updateData, isLoading } = props.store;

  return (
    <div className={styles.search}>
      <Input.Search
        placeholder="City..."
        onSearch={updateData}
        loading={isLoading}
      />
    </div>
  );
}

export default InputField;
