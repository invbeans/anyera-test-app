import styles from './mobile-inputs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function MobileSubmitButton() {
    function handleClick(e) {
        e.preventDefault()
        console.log('клиент нажал кнопку формы')
    }

    return (
        <button className={styles["submit-button"]} type='submit' onClick={handleClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
            <span className={styles["submit-button-span"]}></span>
            Поиск
        </button>
    )
}