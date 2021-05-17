import styles from './WarningField.less';

interface IProps {
    text: string;
}

function WarningField(props: IProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2 className={styles.warning}>{props.text}</h2>
            </div>
        </div>
    );
}

export default WarningField;