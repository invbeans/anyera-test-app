import styles from './main.module.css'
import ImageBackground from './image-background'

export default function MainContainer({ children }) {
    return (
        <div className={styles["main-container"]}>
            <ImageBackground />

            <div className={styles["children-container"]}>
                {children}
            </div>
        </div>
    )
}