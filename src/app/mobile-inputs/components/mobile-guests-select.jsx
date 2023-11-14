import SelectContainer from '@/app/custom-select/components/select-container'
import styles from './mobile-inputs.module.css'

export default function MobileGuestsSelect() {
    return (
        <div className={styles["guests-container"]}>
            <label>Гости</label>
            <SelectContainer/>
        </div>
    )
}