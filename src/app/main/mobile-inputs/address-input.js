import styles from './mobile.module.css'

export default function AddressInput() {
    return (
        <div className={styles["address-container"]}>
            <label htmlFor='address'>Город или адрес</label>
            <input id='address' name='address' type='text' placeholder='Куда едем' />
        </div>
    )
}