import { useContext, useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_Selection_Confirmation.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";
import { useLockNumber } from '../Eddies_Custom_Carousel_Item'; // use the custom hook


export interface Object_Button_Selection_Confirmation_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenIconBool: boolean;
    givenIconHorizontalPlacement: string;
    givenIconFileName: string;


    givenIsDisabled: boolean;
    givenIsLocked: boolean;
    givenPageLockNumberLocal: number;
    givenPageLockNumberState: number;

    givenButtonStyleNoneSelected: string;
    givenButtonStyleSomethingSelected: string;


    givenButtonTextNoneSelected: string;
    givenButtonTextSomethingSelected: string;

    givenDestinationNoneSelected: string;
    givenDestinationSomethingSelected: string;
    givenGoToDestination(givenString: string): void;



    givenPageIndex: number;

    givenWriteTags(givenString: string);
    givenWriteData(givenData: string): void;

    givenTagsToWriteSomethingSelected: string;
    givenTagsToWriteNothingSelected: string;

    givenDataToWriteSomethingSelected: string;
    givenDataToWriteNothingSelected: string;


    givenMapToRead: Map<string, string[]>;

    //STEP 1
    givenNewPrimaryColor?: string;
    givenNewHoverColor?: string;
    givenNewActiveColor?: string;


}

export default function Object_Button_Selection_Confirmation(props: Object_Button_Selection_Confirmation_Props) {



    // const givenContextLockNumber = useLockNumber();
    /* 
        useEffect(() => { console.log("givenContextLockNumber has changed to: " + givenContextLockNumber) }, [givenContextLockNumber])
     */
    const [buttonClassString, setButtonClassString] = useState("");
    const [buttonTextClassString, setButtonTextClassString] = useState("");
    const [buttonIconClassString, setButtonIconClassString] = useState("");
    const [buttonText, setButtonText] = useState("");

    /*  const [contextLockNumber, setContextLockNumber] = useState(""); */


    useEffect(() => {
        /*    console.log("useEffect called for set style ON SELECTION BUTTON!!"); */
        SetStyle();


        if (props.givenGlobal_LockNumber >= 1) {
            // console.log("LOCKED confirmation button sees a lock number of: " + props.givenGlobal_LockNumber)
            setButtonText(props.givenButtonTextNoneSelected);
        }
        else if (props.givenGlobal_LockNumber < 1) {
            // console.log("UNLOCKED confirmation button sees a lock number of: " + props.givenGlobal_LockNumber)
            setButtonText(props.givenButtonTextSomethingSelected);
        }
    }, [props.givenGlobal_LockNumber]);






    function SetStyle() {

        //console.log("SET STYLE CALLED")
        if (props.givenGlobal_LockNumber >= 1) {
            if (props.givenButtonStyleNoneSelected === "primary") {

                //console.log("DISABLED PRIMARY STYLE GIVEN")
                setButtonClassString(`selection-confirmation-button-primary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`selection-confirmation-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`selection-confirmation-button-primary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyleNoneSelected === "secondary") {
                //console.log("DISABLED SECONDARY STYLE GIVEN")
                setButtonClassString(`selection-confirmation-button-secondary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`selection-confirmation-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`selection-confirmation-button-secondary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyleNoneSelected === "tertiary") {
                //console.log("DISABLED TERTIARY STYLE GIVEN")
                setButtonClassString(`selection-confirmation-button-tertiary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`selection-confirmation-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`selection-confirmation-button-tertiary-icon${props.givenGlobal_isMobile}`);
            }
        }
        else if (props.givenGlobal_LockNumber < 1) { //something has been selected
            if (props.givenButtonStyleSomethingSelected === "primary") {
                //console.log("selection-confirmation PRIMARY STYLE GIVEN")
                setButtonClassString(`selection-confirmation-button-primary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`selection-confirmation-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`selection-confirmation-button-primary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyleSomethingSelected === "secondary") {
                //console.log("selection-confirmation PRIMARY STYLE GIVEN")
                setButtonClassString(`selection-confirmation-button-secondary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`selection-confirmation-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`selection-confirmation-button-secondary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyleSomethingSelected === "tertiary") {
                //console.log("selection-confirmation PRIMARY STYLE GIVEN")
                setButtonClassString(`selection-confirmation-button-tertiary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`selection-confirmation-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`selection-confirmation-button-tertiary-icon${props.givenGlobal_isMobile}`);
            }
        }
    }


    var tempTagToWrite: string = "";
    function OnClickSelectionConfirmation() {
        if (props.givenGlobal_LockNumber <= 0) { //page is unlocked, stuff has been selected

            if (props.givenDataToWriteSomethingSelected != "" && props.givenDataToWriteSomethingSelected != undefined) {
                props.givenWriteData(props.givenDataToWriteSomethingSelected);
            }

            props.givenGlobal_MapToRead.forEach((mapArray, mapIndex) => {

                mapArray.forEach(mapValue => {
                    if (mapValue !== "" && mapValue != undefined) {
                        tempTagToWrite = tempTagToWrite + mapValue + "_";
                        console.log("confirmation button got a value to write: " + tempTagToWrite)
                    }

                });

            });
            if (tempTagToWrite !== "" && tempTagToWrite !== undefined) {

                if (props.givenTagsToWriteSomethingSelected !== "" && props.givenTagsToWriteSomethingSelected !== undefined) {
                    props.givenWriteTags(tempTagToWrite + props.givenTagsToWriteSomethingSelected)
                }
                else {
                    props.givenWriteTags(tempTagToWrite)
                }

                /*   props.givenSetTagsAnsweredTrue(tempTagToWrite);  */
            }

            props.givenGoToDestination(props.givenDestinationSomethingSelected);

        }
        else {
            if (props.givenDataToWriteNothingSelected != "" && props.givenDataToWriteNothingSelected != undefined) {
                props.givenWriteData(props.givenDataToWriteNothingSelected);
            }

            if (props.givenTagsToWriteNothingSelected !== "") {
                props.givenWriteTags(props.givenTagsToWriteNothingSelected)
            }
            props.givenGoToDestination(props.givenDestinationNoneSelected);
        }


    }



    function RenderSelectionConfirmationButton() {
        //STEP 2
        const customStyles = {
            background: props.givenNewPrimaryColor,
            border: `1px solid ${props.givenNewPrimaryColor}`,
            transition: "background 0.3s ease-in-out",
        };

        const hoverStyles = {
            background: props.givenNewHoverColor,
            border: `1px solid ${props.givenNewHoverColor}`,
            transition: "background 0.3s ease-in-out",
        };

        const activeStyles = {
            background: props.givenNewActiveColor,
            border: `1px solid ${props.givenNewActiveColor}`,
            transition: "background 0.3s ease-in-out",
        };

        return (<div className={buttonClassString} onClick={() => {
            OnClickSelectionConfirmation();
        }}

            /* STEP 3 */
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyles)} // Desktop hover
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, customStyles)} // Desktop hover end
            onMouseDown={(e) => Object.assign(e.currentTarget.style, activeStyles)} // Desktop active
            onMouseUp={(e) => Object.assign(e.currentTarget.style, hoverStyles)} // Desktop release

            // Mobile Touch Support
            onTouchStart={(e) => Object.assign(e.currentTarget.style, activeStyles)} // Mobile press
            onTouchEnd={(e) => Object.assign(e.currentTarget.style, customStyles)} // Mobile release



        >
            <div className={buttonTextClassString}>
                {buttonText}

                {props.givenIconBool && (<FontAwesomeIcon
                    icon={faCheck as IconProp}
                    className={buttonIconClassString}
                />)}

            </div>

        </div>)
    }



    return (
        RenderSelectionConfirmationButton()

    )


}





