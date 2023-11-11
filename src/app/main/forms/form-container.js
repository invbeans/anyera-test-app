"use client"
import { useMediaQuery } from "react-responsive"
import MobileFormContainer from "./mobile-form-container"
import BiggerFormContainer from "./bigger-form-container"
import MobileAddressInput from "../mobile-inputs/mobile-address-input"
import BiggerAddressInput from "../bigger-inputs/bigger-address-input"
import MobileCalendarInputs from "../mobile-inputs/mobile-calendar-inputs"
import MobileGuestsSelect from "../mobile-inputs/mobile-guests-select"
import MobileSubmitButton from "../mobile-inputs/mobile-submit-button"
import BiggerSubmitButton from "../bigger-inputs/bigger-submit-button"
import BiggerCalendarInputs from "../bigger-inputs/bigger-calendar-inputs"
import BiggerGuestsSelect from "../bigger-inputs/bigger-guests-select"

export default function FormContainer() {
    // const isMobileInput = (useMediaQuery({ maxWidth: 430 }) 
    //     && useMediaQuery({ orientation: 'portrait' })) 
    //     || (useMediaQuery({ maxWidth: 930 }) 
    //     && useMediaQuery({ orientation: 'landscape' }));

    const isPortrait = useMediaQuery({orientation: 'portrait'})
    const isLandscape = useMediaQuery({orientation: 'landscape'})
    const isPortraitWidth = useMediaQuery({maxWidth: 435})
    const isLandscapeWidth = useMediaQuery({maxWidth: 930})
    
    return (
        <>
            {(isPortrait && isPortraitWidth || isLandscape && isLandscapeWidth) ?
                <MobileFormContainer>
                    <MobileAddressInput />
                    <MobileCalendarInputs />
                    <MobileGuestsSelect />
                    <MobileSubmitButton />
                </MobileFormContainer>
                :
                <BiggerFormContainer>
                    <BiggerAddressInput />
                    <BiggerCalendarInputs />
                    <BiggerGuestsSelect />
                    <BiggerSubmitButton />
                </BiggerFormContainer>
            }
        </>
    )
}