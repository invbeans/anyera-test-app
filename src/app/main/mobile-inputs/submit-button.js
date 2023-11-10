import styles from './mobile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SubmitButton() {
    return (
        <button className={styles["submit-button"]} type='submit'>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
            <span className={styles["submit-button-span"]}></span>
            Поиск
        </button>
    )
}