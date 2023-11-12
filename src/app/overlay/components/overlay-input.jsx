import styles from './overlay.module.css'

export default function OverlayInput({name, placeholder}) {
    let inputType = (name == 'password') ? 'password' : 'text'

    return (
        <input className={styles.input} name={name} type={inputType} placeholder={placeholder} />
    )
}
