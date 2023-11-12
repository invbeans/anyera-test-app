import styles from './overlay.module.css'

export default function OverlayCheckbox() {
    return (
        <div className={styles["checkbox-container"]}>
            <input id='save-user' type='checkbox' className={styles.checkbox} />
            <label htmlFor='save-user' className={styles["checkbox-label"]}>Запомнить меня</label>
        </div>
    )
}
