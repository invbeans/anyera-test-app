import styles from './forms.module.css'
import MobileAddressInput from "../../mobile-inputs/components/mobile-address-input"
import MobileCalendarInputs from "../../mobile-inputs/components/mobile-calendar-inputs"
import MobileGuestsSelect from "../../mobile-inputs/components/mobile-guests-select"
import MobileSubmitButton from "../../mobile-inputs/components/mobile-submit-button"

export default function MobileFormContainer() {
    return (
        <form className={styles["mobile-form-container"]}>
            <MobileAddressInput />
            <MobileCalendarInputs />
            <MobileGuestsSelect />
            <MobileSubmitButton />
        </form>
    )
}