import styles from './mobile-inputs.module.css'

export default function MobileCalendarInputs() {
    return (
        <div className={styles["calendar-container"]}>
            <div className={styles["calendar-arrive"]}>
                <label htmlFor="arrival">Прибытие</label>
                <input id="arrival" name='arrival'type="date" placeholder="Когда"/>
            </div>
            <div className={styles["calendar-departure"]}>
                <label htmlFor="departure">Выезд</label>
                <input id="departure" name='departure' type="date" placeholder="Когда"/>
            </div>
        </div>
    )
}