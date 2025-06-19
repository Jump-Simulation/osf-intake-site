import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_Confirm.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Col } from "react-bootstrap";
import { BaseCarouselChildProps } from "../../BaseProps";


interface Object_Button_Confirm_Props extends BaseCarouselChildProps {

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
    /*    givenSetTagsAnsweredTrue(givenString: string): void;
       givenSetTagsAnsweredFalse(givenString: string): void; */



    givenTagToWrite: string;

    givenDataToWrite: string;


    givenTagsTrueArray: string;
    givenTagsFalseArray: string;
    givenTagInclusion: string;
    givenTagExclusion: string;


    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;
    // New Props
    givenNewPrimaryColor?: string;
    givenNewHoverColor?: string;
    givenNewActiveColor?: string;

}

export default function Object_Button_Confirm(props: Object_Button_Confirm_Props) {


    const [buttonClassString, setButtonClassString] = useState("");
    const [buttonTextClassString, setButtonTextClassString] = useState(`textObject-buttonText${props.givenGlobal_isMobile}`);
    const [buttonIconClassString, setButtonIconClassString] = useState("");
    const [isDisabled, setIsDisabled] = useState(props.givenIsDisabled);

    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(props.givenTagInclusion, props.givenTagExclusion, props.givenButtonText, "button confirm", props.givenGlobal_ShouldExcludeByDefault));

    }, [props.givenTagsTrueArray, props.givenTagsFalseArray])





    useEffect(
        () => { SelectButtonStyle(); },
        [props.givenButtonStyle]);


    function SelectButtonStyle() {
        if (isDisabled) {
            if (props.givenButtonStyle === "primary") {
                setButtonClassString(`confirm-button-primary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`confirm-button-primary-text-disabled${props.givenGlobal_isMobile}  textObject-buttonText${props.givenGlobal_isMobile} `);
                setButtonIconClassString(`confirm-button-primary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                setButtonClassString("confirm-button-secondary-disabled");
                setButtonTextClassString(`confirm-button-secondary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`confirm-button-secondary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                setButtonClassString(`confirm-button-tertiary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`confirm-button-tertiary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`confirm-button-tertiary-icon-disabled${props.givenGlobal_isMobile}`);
            }
        }
        else if (!isDisabled) {
            if (props.givenButtonStyle === "primary") {
                setButtonClassString(`confirm-button-primary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`confirm-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`confirm-button-primary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                setButtonClassString(`confirm-button-secondary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`confirm-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`confirm-button-secondary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                setButtonClassString(`confirm-button-tertiary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`confirm-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`confirm-button-tertiary-icon${props.givenGlobal_isMobile}`);
            }
        }
    }


    function OnClickConfirm() {
        if (!isDisabled) {

            if (props.givenTagToWrite != "") {
                props.givenWriteTags(props.givenTagToWrite);
            }

            if (props.givenDataToWrite != "") {
                props.givenWriteData(props.givenDataToWrite)
            }
            props.givenGoToDestination(props.givenDestination);
        } else {
            //button is disabled!!
        }
    }


    function SetIsDisabled() {
        /*  some logic for when this needs to be set to false or true, probably external in nature
                setIsDisabled(true); */

    }






    function RenderConfirmButton() {
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


            <div
                className={buttonClassString}
                onClick={() => {
                    OnClickConfirm();
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
                </div>
                {props.givenIconBool && (<FontAwesomeIcon
                    icon={faCheck as IconProp}
                    className={buttonIconClassString}
                />)}
            </div>

        )

    }

    if (shouldRender) {
        return (
            RenderConfirmButton()
        )
    }
    else { return (<></>) }




}