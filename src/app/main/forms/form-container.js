"use client"
import { useMediaQuery } from "react-responsive"
import MobileFormContainer from "./mobile-form-container"
import BiggerFormContainer from "./bigger-form-container"
import AddressInput from "../mobile-inputs/address-input"
import CalendarInput from "../mobile-inputs/calendar-inputs"
import GuestsSelect from "../mobile-inputs/guests-select"
import SubmitButton from "../mobile-inputs/submit-button"

export default function FormContainer() {
    const isMobileInput = useMediaQuery({ maxWidth: 435 })

    return (
        <>
            {isMobileInput ?
                <MobileFormContainer>
                    <AddressInput />
                    <CalendarInput />
                    <GuestsSelect />
                    <SubmitButton />
                </MobileFormContainer>
                :
                <BiggerFormContainer>
                    <label htmlFor="what">text</label>
                    <input type="text" id="what"/>
                </BiggerFormContainer>
            }
        </>
    )
}