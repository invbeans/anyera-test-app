import styles from './bigger-inputs.module.css'

export default function BiggerCalendarInputs() {
    return (
        <div className={styles["calendar-container"]}>
            <div className={styles["calendar-arrive"]}>
                <label htmlFor="arrival">Прибытие</label>
                <input id="arrival" name='arrival' type="date" placeholder="Когда"/>
            </div>
            <div className={styles["calendar-arrive"]}>
                <label htmlFor="departure">Выезд</label>
                <input id="departure" name='departure' type="date" placeholder="Когда"/>
            </div>
        </div>
    )
}