import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_Normal_Locked.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";


interface Object_Button_Normal_Locked_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenIconBool: boolean;
    givenIconHorizontalPlacement: string;
    givenIconFileName: string;

    givenButtonText: string;
    givenButtonStyle: string;
    givenIsDisabled: boolean;
    givenIsLocked: boolean;

    givenDestination: string;
    givenGoToDestination(givenString: string): void;


    givenLockNumber: number;


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

export default function Object_Button_Normal_Locked(props: Object_Button_Normal_Locked_Props) {

    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(props.givenTagInclusion, props.givenTagExclusion, props.givenButtonText, "button normal locked", props.givenGlobal_ShouldExcludeByDefault));

    }, [props.givenTagsTrueArray, props.givenTagsFalseArray])


    const [buttonClassString, setButtonClassString] = useState("");
    const [buttonTextClassString, setButtonTextClassString] = useState(`textObject-buttonText${props.givenGlobal_isMobile}`);
    const [buttonIconClassString, setButtonIconClassString] = useState("");
    const [isDisabled, setIsDisabled] = useState(props.givenIsLocked);


    var isDisabledInternal: boolean = props.givenIsDisabled;



    useEffect(() => {
        SelectButtonStyle()
    }, []);

    useEffect(() => {

        /*     console.log("CURRENT BUTTON STATS: " + " props.givenLockNumber: "
                + props.givenLockNumber + " || page is locked: " + props.givenIsLocked);
     */
        if (props.givenLockNumber <= 0 && props.givenIsLocked === true) {
            setIsDisabled(false); //if the page is unlocked, unlock the button
            isDisabledInternal = false;
        }
        else if (props.givenLockNumber > 0 && props.givenIsLocked === true) {
            setIsDisabled(true); //if the page is unlocked, unlock the button
            isDisabledInternal = true;
        }

    }, [props.givenLockNumber])

    useEffect(() => {
        /*    console.log("useEffect called for set style!!") */
        SetStyle();
    }, [isDisabled]);



    function SelectButtonStyle() {
        //console.log("SELECT BUTTON STYLE CALLED")
        if (props.givenIsLocked && props.givenLockNumber > 0) {

            // console.log("SETTING IS DISABLED TO TRUE FROM SELECT BUTTON STYLE")
            //Set disabled should have been set to true
            setIsDisabled(true); //set the button to be disabled at start if the page is locked and the lock number is higher than 0
        }
    }


    function SetStyle() {

        //console.log("SET STYLE CALLED")
        if (isDisabled) {
            if (props.givenButtonStyle === "primary") {

                //console.log("DISABLED PRIMARY STYLE GIVEN")
                setButtonClassString(`normal-locked-button-primary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-locked-button-primary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-locked-button-primary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                //console.log("DISABLED SECONDARY STYLE GIVEN")
                setButtonClassString(`normal-locked-button-secondary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-locked-button-secondary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-locked-button-secondary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                //console.log("DISABLED TERTIARY STYLE GIVEN")
                setButtonClassString(`normal-locked-button-tertiary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-locked-button-tertiary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-locked-button-tertiary-icon-disabled${props.givenGlobal_isMobile}`);
            }
        }
        else if (!isDisabled) {
            if (props.givenButtonStyle === "primary") {
                //console.log("NORMAL PRIMARY STYLE GIVEN")
                setButtonClassString(`normal-locked-button-primary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-locked-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-locked-button-primary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                //console.log("NORMAL PRIMARY STYLE GIVEN")
                setButtonClassString(`normal-locked-button-secondary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-locked-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-locked-button-secondary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                //console.log("NORMAL PRIMARY STYLE GIVEN")
                setButtonClassString(`normal-locked-button-tertiary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-locked-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-locked-button-tertiary-icon${props.givenGlobal_isMobile}`);
            }
        }
    }

    function OnClickNormal_Locked() {


        if (props.givenIsLocked) {
            if (props.givenLockNumber <= 0 && !isDisabled) {

                if (props.givenTagToWrite != "") {
                    props.givenWriteTags(props.givenTagToWrite);
                }

                if (props.givenDataToWrite != "") {
                    props.givenWriteData(props.givenDataToWrite)
                }


                props.givenGoToDestination(props.givenDestination)
            }
            else {
                //the page is still locked
            }
        }
        else {
            props.givenGoToDestination(props.givenDestination)
        }




    }



    function RenderNormal_LockedButton() {

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
            OnClickNormal_Locked();

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

        </div>)
    }

    if (shouldRender) {
        return (
            RenderNormal_LockedButton()
        )
    }
    else { return (<></>) }




}