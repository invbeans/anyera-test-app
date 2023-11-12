import styles from './main.module.css'

export default function ChildrenContainer({ children }) {
    return (
        <div className={styles["children-container"]}>
            {children}
        </div>
    )
}