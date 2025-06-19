import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import ReactSlidingPane from "react-sliding-pane";

import "../CSS/Object_Modal_ContactUs.css";
import { BaseCarouselChildProps } from "../BaseProps";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



export interface Object_Modal_ContactUs_Props extends BaseCarouselChildProps {




    givenModalItems: React.ReactElement<BaseCarouselChildProps>[]
    givenShowContactUsModal: boolean;
    givenSetShowContactUsModal(givenBool: boolean): void;
    givenSetLocalModalID(givenID: string): void;


}


export default function Object_Modal_ContactUs(props: Object_Modal_ContactUs_Props) {



    function RenderModal() {

        if (props.givenShowContactUsModal === true) {
            props.givenSetLocalModalID("Contact Us Modal");
            return (
                <div

                    className={`modal-contactus-container${props.givenGlobal_isMobile}`}
                    onClick={() => {
                        props.givenSetShowContactUsModal(false);
                    }}>
                    <div
                        className={`modal-contactus${props.givenGlobal_isMobile}`}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}

                    >
                        {props.givenModalItems.map((child, index) => {
                            if (React.isValidElement(child)) {

                                /*     console.log('Type of givenCarouselChild:'); */
                                /*    console.log(typeof child);  *///THESE ARE THE HOLDERS!!!
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
                                /*             console.log('Invalid React Element:', child);
                                            console.log('Type of givenCarouselChild:', typeof child); */
                                return child;
                            }
                        })}







                        <div className={`modal-x-mark-parent${props.givenGlobal_isMobile}`} onClick={() => {
                            props.givenSetShowContactUsModal(false);
                        }}> <FontAwesomeIcon
                                icon={faXmark as IconProp}
                                className={`modal-x-mark${props.givenGlobal_isMobile}`}
                            /></div>
                    </div>
                </div>

            );
        }
        else {
            return (
                <>
                </>
            )
        }




    }

    return (RenderModal())






}