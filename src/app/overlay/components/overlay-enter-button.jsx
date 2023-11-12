import styles from './overlay.module.css'

export default function OverlayEnterButton() {
    function handleClick(e) {
        e.preventDefault()
        console.log('Пользователь авторизовался')
    }

    return (
        <button type='submit' className={styles["enter-button"]} onClick={handleClick}>
            Войти
        </button>
    )
}