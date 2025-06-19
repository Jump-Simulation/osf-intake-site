import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_Deny.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";




interface Object_Button_Deny_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenIconBool: boolean;
    givenButtonText: string;

    givenButtonStyle: string;
    givenIsDisabled: boolean;
    givenDestination: string;
    givenGoToDestination(givenString: string): void;
    givenPageIndex: number;

    givenWriteTags(givenTag: string): void;
    givenWriteData(givenData: string): void;

    givenTagsTrueArray: string;
    givenTagsFalseArray: string;

    givenTagInclusion: string;
    givenTagExclusion: string;

    givenTagToWrite: string;
    givenDataToWrite: string;


    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;
    //STEP 1
    givenNewPrimaryColor?: string;
    givenNewHoverColor?: string;
    givenNewActiveColor?: string;

}

export default function Object_Button_Deny(props: Object_Button_Deny_Props) {


    const [buttonClassString, setButtonClassString] = useState("");
    const [buttonTextClassString, setButtonTextClassString] = useState(`textObject-buttonText${props.givenGlobal_isMobile}`);
    const [buttonIconClassString, setButtonIconClassString] = useState("");
    const [isDisabled, setIsDisabled] = useState(props.givenIsDisabled);

    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(props.givenTagInclusion, props.givenTagExclusion, props.givenButtonText, "button deny", props.givenGlobal_ShouldExcludeByDefault));

    }, [props.givenTagsTrueArray, props.givenTagsFalseArray])





    useEffect(() => { SelectButtonStyle() }, []);


    function SelectButtonStyle() {
        if (isDisabled) {
            if (props.givenButtonStyle === "primary") {
                setButtonClassString(`deny-button-primary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`deny-button-primary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`deny-button-primary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                setButtonClassString(`deny-button-secondary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`deny-button-secondary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`deny-button-secondary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                setButtonClassString(`deny-button-tertiary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`deny-button-tertiary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`deny-button-tertiary-icon-disabled${props.givenGlobal_isMobile}`);
            }
        }
        else if (!isDisabled) {
            if (props.givenButtonStyle === "primary") {
                setButtonClassString(`deny-button-primary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`deny-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`deny-button-primary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                setButtonClassString(`deny-button-secondary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`deny-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`deny-button-secondary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                setButtonClassString(`deny-button-tertiary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`deny-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`deny-button-tertiary-icon${props.givenGlobal_isMobile}`);
            }
        }
    }


    function OnClickDeny() {
        if (!isDisabled) {
            if (props.givenTagToWrite != "") {
                props.givenWriteTags(props.givenTagToWrite);
            }

            if (props.givenDataToWrite != "") {
                props.givenWriteData(props.givenDataToWrite)
            }
            props.givenGoToDestination(props.givenDestination)
        } else {
            //button is disabled!!
        }
    }


    function SetIsDisabled() {
        /*  some logic for when this needs to be set to false or true, probably external in nature
                setIsDisabled(true); */

    }






    function RenderDenyButton() {

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



        return (
            <div className={buttonClassString}/*  style={{backgroundColor: "var(--color-success-container)"}}  */ onClick={() => {
                OnClickDeny();
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

                    {props.givenButtonText}

                    {props.givenIconBool && (<FontAwesomeIcon
                        icon={faCheck as IconProp}
                        className={buttonIconClassString}
                    />)}

                </div>

            </div>
        )
    }


    if (shouldRender) {
        return (
            RenderDenyButton()
        )
    }
    else { return (<></>) }



}