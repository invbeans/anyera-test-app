import styles from './bigger-inputs.module.css'

//onFocus="(this.type='date')"

export default function BiggerCalendarInputs() {
    return (
        <div className={styles["calendar-container"]}>
            <div className={styles["calendar-arrive"]}>
                <label htmlFor="arrival">Прибытие</label>
                <input id="arrival" name='arrival' type="text" placeholder="Когда"
                     />
            </div>
            <div className={styles["calendar-arrive"]}>
                <label htmlFor="departure">Выезд</label>
                <input id="departure" name='departure' type="text" placeholder="Когда"
                   />
            </div>
        </div>
    )
}