import styles from '../main.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default function BiggerFormContainer({ children }) {
    return (
        <form className={styles["bigger-form-container"]}>
            {children}
            {/* <button style={{ width: '4rem', height: '3rem', backgroundColor: 'red' }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />еще текст
            </button> */}
        </form>
    )
}