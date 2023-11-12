import styles from './forms.module.css'
import BiggerAddressInput from "../../bigger-inputs/components/bigger-address-input"
import BiggerSubmitButton from "../../bigger-inputs/components/bigger-submit-button"
import BiggerCalendarInputs from "../../bigger-inputs/components/bigger-calendar-inputs"
import BiggerGuestsSelect from "../../bigger-inputs/components/bigger-guests-select"

export default function BiggerFormContainer() {
    return (
        <form className={styles["bigger-form-container"]}>
            <BiggerAddressInput />
            <BiggerCalendarInputs />
            <BiggerGuestsSelect />
            <BiggerSubmitButton />
        </form>
    )
}
