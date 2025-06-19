import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import "../../CSS/Page_Component_Styles/Object_Button_PhoneNumber.css";
import { BaseCarouselChildProps } from "../../BaseProps";

interface Object_Button_PhoneNumber_Props extends BaseCarouselChildProps {
    givenPhoneNumberHardCoded: string;
    givenPhoneNumberVariable?: string;

    isMobile?: string;

    givenIconBool?: boolean;
    givenIconHorizontalPlacement?: string;
    givenIconFileName?: string;

    givenButtonText: string;
    givenButtonStyle: string;
    givenIsDisabled: boolean;

    givenTagsTrueArray: string;
    givenTagsFalseArray: string;

    givenTagInclusion: string;
    givenTagExclusion: string;

    givenIncrementFirestoreVariable(givenVariableName: string, givenLocation: string): void;


    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;

    // New Props
    givenNewPrimaryColor?: string;
    givenNewHoverColor?: string;
    givenNewActiveColor?: string;
}



export default function Object_Button_PhoneNumber(props: Object_Button_PhoneNumber_Props) {



    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(props.givenTagInclusion,
            props.givenTagExclusion,
            props.givenButtonText,
            "button phone number",
            props.givenGlobal_ShouldExcludeByDefault));

    }, [props.givenTagsTrueArray, props.givenTagsFalseArray])


    const [buttonClassString, setButtonClassString] = useState("");
    const [buttonTextClassString, setButtonTextClassString] = useState(`textObject-buttonText${props.givenGlobal_isMobile}`);
    const [buttonIconClassString, setButtonIconClassString] = useState("");
    const [isDisabled, setIsDisabled] = useState(props.givenIsDisabled);



    useEffect(() => {
        /*    console.log("useEffect called for set style!!") */
        SetStyle();
    }, []);



    function SetStyle() {

        //console.log("SET STYLE CALLED")
        if (isDisabled) {
            if (props.givenButtonStyle === "primary") {

                //console.log("DISABLED PRIMARY STYLE GIVEN")
                setButtonClassString(`phone-number-button-primary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`phone-number-button-primary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`phone-number-button-primary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                //console.log("DISABLED SECONDARY STYLE GIVEN")
                setButtonClassString(`phone-number-button-secondary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`phone-number-button-secondary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`phone-number-button-secondary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                //console.log("DISABLED TERTIARY STYLE GIVEN")
                setButtonClassString(`phone-number-button-tertiary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`phone-number-button-tertiary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`phone-number-button-tertiary-icon-disabled${props.givenGlobal_isMobile}`);
            }
        }
        else if (!isDisabled) {
            if (props.givenButtonStyle === "primary") {
                //console.log("phone-number PRIMARY STYLE GIVEN")
                setButtonClassString(`phone-number-button-primary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`phone-number-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`phone-number-button-primary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                //console.log("phone-number PRIMARY STYLE GIVEN")
                setButtonClassString(`phone-number-button-secondary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`phone-number-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`phone-number-button-secondary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                //console.log("phone-number PRIMARY STYLE GIVEN")
                setButtonClassString(`phone-number-button-tertiary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`phone-number-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`phone-number-button-tertiary-icon${props.givenGlobal_isMobile}`);
            }
        }
    }

    function OnClickPhoneNumber(number: string) {
        //console.log("about to increment firestore var for phone number with modalId: " + props.givenGlobal_CurrentModalID + " and pageId: " + props.givenGlobal_CurrentPageID)
        if (props.givenGlobal_CurrentModalID !== "" &&
            props.givenGlobal_CurrentModalID !== "null" &&
            props.givenGlobal_CurrentModalID !== "none") {
            props.givenIncrementFirestoreVariable("phoneButtonPressedFrom_Book:" + props.givenGlobal_CurrentBookID + "_Page:" + props.givenGlobal_CurrentPageID + "_Modal:" + props.givenGlobal_CurrentModalID, "phone number button + modal")
        }
        else {
            props.givenIncrementFirestoreVariable("phoneButtonPressedFrom_Book:" + props.givenGlobal_CurrentBookID + "_Page:" + props.givenGlobal_CurrentPageID, "phone number button")
        }

    }

    function RenderPhoneNumberButton() {


        const customStyles = {
            background: props.givenNewPrimaryColor,
            border: `1px solid ${props.givenNewPrimaryColor}`,
        };

        const hoverStyles = {
            background: props.givenNewHoverColor,
            border: `1px solid ${props.givenNewHoverColor}`,
        };

        const activeStyles = {
            background: props.givenNewActiveColor,
            border: `1px solid ${props.givenNewActiveColor}`,
        };


        return (<a
            className={buttonClassString}
            onClick={() => { OnClickPhoneNumber(props.givenPhoneNumberHardCoded) }}
            href={`tel:${props.givenPhoneNumberHardCoded}`}

            onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyles)} // Desktop hover
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, customStyles)} // Desktop hover end
            onMouseDown={(e) => Object.assign(e.currentTarget.style, activeStyles)} // Desktop active
            onMouseUp={(e) => Object.assign(e.currentTarget.style, hoverStyles)} // Desktop release

            // Mobile Touch Support
            onTouchStart={(e) => Object.assign(e.currentTarget.style, activeStyles)} // Mobile press
            onTouchEnd={(e) => Object.assign(e.currentTarget.style, customStyles)} // Mobile release




        >
            <div className={buttonTextClassString}>


                {props.givenIconBool && (<FontAwesomeIcon
                    icon={faCheck as IconProp}
                    className={buttonIconClassString}
                />)}

                {props.givenButtonText}

            </div>

            {/*     <a
                href={`tel:${props.givenPhoneNumberHardCoded}`}
                style={{
                    color: "blue",
                    textDecoration: "underline",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                {props.givenPhoneNumberHardCoded}
            </a> */}

        </a>)
    }

    if (shouldRender) {

        return (
            RenderPhoneNumberButton()
        )

    }
    else { return (<></>) }




}