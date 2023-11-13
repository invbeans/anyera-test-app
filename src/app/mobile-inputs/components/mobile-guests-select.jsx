import styles from './mobile-inputs.module.css'

export default function MobileGuestsSelect() {
    return (
        <div className={styles["guests-container"]}>
            <label htmlFor="guests">Гости</label>
            <select id="guests" name='guests'>
                <option>2 взрослых без детей</option>
            </select>
        </div>
    )
}