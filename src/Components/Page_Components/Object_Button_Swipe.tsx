import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_Swipe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faArrowDown,
    faCheck,
    faChevronCircleDown,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";


interface Object_Button_Swipe_Props extends BaseCarouselChildProps {

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

export default function Object_Button_Swipe(props: Object_Button_Swipe_Props) {


    const [buttonClassString, setButtonClassString] = useState("");
    const [buttonTextClassString, setButtonTextClassString] = useState("");
    const [buttonIconClassString, setButtonIconClassString] = useState("");
    const [isDisabled, setIsDisabled] = useState(props.givenIsDisabledBool);





    useEffect(() => { SelectButtonStyle() }, []);


    function SelectButtonStyle() {
        if (isDisabled) {
            if (props.givenButtonStyle === "primary") {
                setButtonClassString("normal-button-primary-disabled");
                setButtonTextClassString("normal-button-primary-text-disabled");
                setButtonIconClassString("normal-button-primary-icon-disabled");
            }
            else if (props.givenButtonStyle === "secondary") {
                setButtonClassString("normal-button-secondary-disabled");
                setButtonTextClassString("normal-button-secondary-text-disabled");
                setButtonIconClassString("normal-button-secondary-icon-disabled");
            }
            else if (props.givenButtonStyle === "tertiary") {
                setButtonClassString("normal-button-tertiary-disabled");
                setButtonTextClassString("normal-button-tertiary-text-disabled");
                setButtonIconClassString("normal-button-tertiary-icon-disabled");
            }
        }
        else if (!isDisabled) {
            if (props.givenButtonStyle === "primary") {
                setButtonClassString("normal-button-primary");
                setButtonTextClassString("normal-button-primary-text");
                setButtonIconClassString("normal-button-primary-icon");
            }
            else if (props.givenButtonStyle === "secondary") {
                setButtonClassString("normal-button-secondary");
                setButtonTextClassString("normal-button-secondary-text");
                setButtonIconClassString("normal-button-secondary-icon");
            }
            else if (props.givenButtonStyle === "tertiary") {
                setButtonClassString("normal-button-tertiary");
                setButtonTextClassString("normal-button-tertiary-text");
                setButtonIconClassString("normal-button-tertiary-icon");
            }
        }
    }


    function OnClickNormal() {
        console.log("Attempting to go to: " + props.givenDestination + " from Swipe Button!")
        props.givenGoToDestination(props.givenDestination)
    }


    function SetIsDisabled() {
        /*  some logic for when this needs to be set to false or true, probably external in nature
                setIsDisabled(true); */

    }






    function RenderNormalButton() {
        return (<div className={"object-button-swipe-parent"} onClick={() => { OnClickNormal() }}>


            {/*         <div className={buttonTextClassString}>


                {props.givenButtonText}

            </div> */}
            <div className={"object-button-swipe"}>
                {props.givenIconBool && (<FontAwesomeIcon
                    icon={faChevronDown as IconProp}
                    className={"object-icon"}

                />)}
            </div>


        </div>)
    }



    return (
        RenderNormalButton()
    )

}