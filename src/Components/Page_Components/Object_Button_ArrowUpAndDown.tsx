import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_ArrowUpAndDown.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";



/* NOT USED CURRENTLY */



interface Object_Button_ArrowUpAndDown_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenIconBool: boolean;
    givenButtonText: string;
    givenButtonStyle: string;
    givenIsDisabledBool: boolean;
    givenHasLock: boolean;

    givenDestination: string;
    givenGoToDestination(givenString: string): void;


    givenLockNumber: number;
    givenSetLockNumber(givenNumber: number, givenFunctionName: string): void;
}

export default function Object_Button_ArrowUpAndDown(props: Object_Button_ArrowUpAndDown_Props) {


    const [buttonClassString, setButtonClassString] = useState("");
    const [buttonTextClassString, setButtonTextClassString] = useState("");
    const [buttonIconClassString, setButtonIconClassString] = useState("");
    const [isDisabled, setIsDisabled] = useState(props.givenIsDisabledBool);





    useEffect(() => { SelectButtonStyle() }, []);


    function SelectButtonStyle() {

        if (props.givenButtonStyle === "primary") {
            setButtonClassString(`normal-button-primary${props.givenGlobal_isMobile}`);
            setButtonTextClassString(`normal-button-primary-text${props.givenGlobal_isMobile}`);
            setButtonIconClassString(`normal-button-primary-icon${props.givenGlobal_isMobile}`);
        }
        else if (props.givenButtonStyle === "secondary") {
            setButtonClassString(`normal-button-secondary${props.givenGlobal_isMobile}`);
            setButtonTextClassString(`normal-button-secondary-text${props.givenGlobal_isMobile}`);
            setButtonIconClassString(`normal-button-secondary-icon${props.givenGlobal_isMobile}`);
        }
        else if (props.givenButtonStyle === "tertiary") {
            setButtonClassString(`normal-button-tertiary${props.givenGlobal_isMobile}`);
            setButtonTextClassString(`normal-button-tertiary-text${props.givenGlobal_isMobile}`);
            setButtonIconClassString(`normal-button-tertiary-icon${props.givenGlobal_isMobile}`);
        }

    }


    function OnClickDown() {
        console.log("Attempting to go to: " + props.givenDestination + " from Swipe Down Button!")
        props.givenGoToDestination(props.givenDestination)
    }

    function OnClickUp() {
        console.log("Attempting to go to: page_previous from Swipe Down Button!")
        props.givenGoToDestination("page_previous")
    }


    function SetIsDisabled() {
        /*  some logic for when this needs to be set to false or true, probably external in nature
                setIsDisabled(true); */

    }






    function RenderNormalButton() {
        return (<div className={`object-button-swipe-parent${props.givenGlobal_isMobile}`}>

            {/* 
            <div className={buttonTextClassString}>


                {props.givenButtonText}

            </div> */}
            <div className={`object-button-swipe-up${props.givenGlobal_isMobile}`} onClick={() => { OnClickUp() }}>
                {props.givenIconBool && (<FontAwesomeIcon
                    icon={faAngleUp as IconProp}
                    className={`object-icon-size${props.givenGlobal_isMobile}`}


                />)}
            </div>
            <div className={`object-button-swipe-down${props.givenGlobal_isMobile}`} onClick={() => { OnClickDown() }}>
                {props.givenIconBool && (<FontAwesomeIcon
                    icon={faAngleDown as IconProp}
                    className={`object-icon-size${props.givenGlobal_isMobile}`}

                />)}
            </div>


        </div>)
    }



    return (
        RenderNormalButton()
    )

}