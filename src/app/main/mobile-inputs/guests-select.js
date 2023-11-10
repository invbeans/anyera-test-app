import styles from './mobile.module.css'

export default function GuestsSelect() {
    return (
        <div className={styles["guests-container"]}>
            <label htmlFor="guests">Город или адрес</label>
            <select id="guests" name='guests'>
                <option>2 взрослых без детей</option>
            </select>
        </div>
    )
}