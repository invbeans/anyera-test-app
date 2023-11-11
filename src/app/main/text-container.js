import { ceraPro } from '../fonts'
import styles from './main.module.css'

export default function TextContainer() {
    return (
        <div className={styles["text-container"] + " " + ceraPro.className}>
            <div className={styles["small-text"]}>Ut enim ad minim veniam</div>
            <div className={styles["large-text"]}>Duis aute irure dolor<br></br>in reprehenderit</div>
            <div className={styles["medium-text"]}>Duis aute irure dolor in reprehenderit</div>
        </div>
    )
}