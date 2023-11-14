import SelectContainer from '@/app/custom-select/components/select-container'
import styles from './bigger-inputs.module.css'

export default function BiggerGuestsSelect() {
    return (
        <div className={styles["guests-container"]}>
            <label >Гости</label>
            <SelectContainer />
        </div>
    )
}