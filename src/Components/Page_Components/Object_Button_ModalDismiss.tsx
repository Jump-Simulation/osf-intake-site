import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import "../../CSS/Page_Component_Styles/Object_Button_ModalDismiss.css";
import { BaseCarouselChildProps } from "../../BaseProps";

interface Object_Button_ModalDismiss_Props extends BaseCarouselChildProps {

    givenSetCurrentModalID(givenString: string): void;





    isMobile: string;

    givenIconBool: boolean;
    givenButtonText: string;
    givenButtonStyle: string;
    givenIsDisabled: boolean;

}



export default function Object_Button_ModalDismiss(props: Object_Button_ModalDismiss_Props) {
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
                setButtonClassString(`normal-button-primary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-button-primary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-button-primary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                //console.log("DISABLED SECONDARY STYLE GIVEN")
                setButtonClassString(`normal-button-secondary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-button-secondary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-button-secondary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                //console.log("DISABLED TERTIARY STYLE GIVEN")
                setButtonClassString(`normal-button-tertiary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-button-tertiary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-button-tertiary-icon-disabled${props.givenGlobal_isMobile}`);
            }
        }
        else if (!isDisabled) {
            if (props.givenButtonStyle === "primary") {
                //console.log("NORMAL PRIMARY STYLE GIVEN")
                setButtonClassString(`normal-button-primary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-button-primary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                //console.log("NORMAL PRIMARY STYLE GIVEN")
                setButtonClassString(`normal-button-secondary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-button-secondary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                //console.log("NORMAL PRIMARY STYLE GIVEN")
                setButtonClassString(`normal-button-tertiary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`normal-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`normal-button-tertiary-icon${props.givenGlobal_isMobile}`);
            }
        }
    }


    function OnClickDismiss() {
        props.givenSetCurrentModalID("null");
    }

    function RenderModalDismissButton() {
        return (<div className={buttonClassString} onClick={() => {
            OnClickDismiss();
        }}>
            <div className={buttonTextClassString}>
                {props.givenButtonText}

                {props.givenIconBool && (<FontAwesomeIcon
                    icon={faCheck as IconProp}
                    className={buttonIconClassString}
                />)}
            </div>

        </div>)
    }


    return (<></>)

}