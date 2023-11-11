import styles from './bigger-inputs.module.css'

export default function BiggerGuestsSelect() {
    return (
        <div className={styles["guests-container"]}>
            <label htmlFor="guests">Город или адрес</label>
            <select id="guests" name='guests'>
                <option>2 взрослых без детей</option>
            </select>
        </div>
    )
}