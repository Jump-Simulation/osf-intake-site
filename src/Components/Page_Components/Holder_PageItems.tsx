import "../../CSS/Page_Component_Styles/Holder_PageItems.css"
import { BaseCarouselChildProps } from "../../BaseProps";
import React, { useEffect } from "react";

interface Holder_PageItems_Props extends BaseCarouselChildProps {
    isMobile: string;
    /*  givenPageItemChildren: React.ReactNode[]; */
    givenPageItemChildren: React.ReactElement<BaseCarouselChildProps>[];


}


export default function Holder_PageItems(props: Holder_PageItems_Props) {

    /*  useEffect(() => {
         console.log("HOLDER PAGE ITEMS SAW A CHANGE IN GLOBAL GIVEN LOCK NUMBER!!")
     }, [props.globalGiven_LockNumber])
  */
    return (
        <div className={`holder-page-items${props.givenGlobal_isMobile}`}> {/* THIS IS THE BRIGHT RED DIV CALLED "Holder_Page_Items" */}

            {/*   {props.givenPageItemChildren} */}

            {props.givenPageItemChildren.map((child, index) => {
                if (React.isValidElement(child)) {

                    /*         console.log('Type of givenCarouselChild:');
                            console.log(typeof child); */
                    return React.cloneElement(child, {
                        key: index, // Make sure to provide a key if rendering an array
                        givenGlobal_isMobile: props.givenGlobal_isMobile,
                        givenGlobal_CurrentCarouselIndex: props.givenGlobal_CurrentCarouselIndex,
                        givenGlobal_PreviousCarouselIndex: props.givenGlobal_PreviousCarouselIndex,
                        givenGlobal_LockNumber: props.givenGlobal_LockNumber,
                        givenGlobal_PrepDestination: props.givenGlobal_PrepDestination,

                        givenGlobal_PatientNameFirst: props.givenGlobal_PatientNameFirst,
                        givenGlobal_PatientNameLast: props.givenGlobal_PatientNameLast,
                        givenGlobal_PatientAnesthesiaType: props.givenGlobal_PatientAnesthesiaType,
                        givenGlobal_PatientSex: props.givenGlobal_PatientSex,
                        givenGlobal_PatientAge: props.givenGlobal_PatientAge,
                        givenGlobal_PatientDateEnteredPatientFlow: props.givenGlobal_PatientDateEnteredPatientFlow,
                        givenGlobal_PatientDateOfProcedure: props.givenGlobal_PatientDateOfProcedure,
                        givenGlobal_PatientHasSeenProcedureIntro: props.givenGlobal_PatientHasSeenProcedureIntro,
                        givenGlobal_PatientPreferedLanguage: props.givenGlobal_PatientPreferedLanguage,
                        givenGlobal_PatientProcedureLocation: props.givenGlobal_PatientProcedureLocation,
                        givenGlobal_PatientTimeOfProcedure: props.givenGlobal_PatientTimeOfProcedure,
                        givenGlobal_TagsTrueArray: props.givenGlobal_TagsTrueArray,
                        givenGlobal_TagsFalseArray: props.givenGlobal_TagsFalseArray,
                        givenGlobal_MapToRead: props.givenGlobal_MapToRead,
                        givenGlobal_CurrentPageID: props.givenGlobal_CurrentPageID,
                        givenGlobal_CurrentModalID: props.givenGlobal_CurrentModalID,
                        givenGlobal_CurrentBookID: props.givenGlobal_CurrentBookID,
                    });
                } else {

                    return child;
                }
            })}


        </div>
    )

}