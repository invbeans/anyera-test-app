import SelectContainer from '@/app/custom-select/components/select-container'
import styles from './bigger-inputs.module.css'

export default function BiggerGuestsSelect() {
    return (
        <div className={styles["guests-container"]}>
            <label >Гости</label>
            <SelectContainer />
            {/* <select id="guests" name='guests'>
                <option>2 взрослых без детей</option>
                <option>2 детей без взрослых</option>
            </select> */}
        </div>
    )
}