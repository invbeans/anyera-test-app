import styles from './bigger-inputs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function BiggerSubmitButton() {
    return (
        <button className={styles["submit-button"]} type='submit'>
            <FontAwesomeIcon className={styles["icon-fill-div"]} icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
        </button>
    )
}