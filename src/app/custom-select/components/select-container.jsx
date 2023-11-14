import { useState } from "react"
import styles from './custom-select.module.css'

export default function SelectContainer() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    function toggling() {
        setIsOpen(!isOpen)
        console.log('прив')
    }

    const options = [
        { key: 1, text: '2 взрослых без детей' },
        { key: 2, text: '2 взрослых 1 ребенок' }
    ]

    function onOptionClicked(value) {
        setSelectedOption(value.text)
        setIsOpen(false)
        console.log(selectedOption)
    }

    return (
        <div className={styles["select-container"]}>
            <div onClick={toggling} className={styles["select-header"]}>
                {selectedOption || options[0].text}
            </div>
            {isOpen &&
                <div className={styles["select-list"]}>
                    {options.map(option => (
                        <div className={styles["select-item"]}
                            onClick={() => onOptionClicked(option)}
                            key={option.key}
                        >
                            {option.text}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}