import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_ArrowDown.css"

import "../../CSS/Page_Component_Styles/Object_Item_Text.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";


interface Object_Button_ArrowDown_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenDestination: string;
    givenGoToDestination(givenString: string): void;
    givenSetLockNumber(givenNumber: number, givenFunctionName: string): void;
    givenButtonText?: string;
    givenButtonStyle?: string;


    givenWriteTags?(givenTag: string): void;
    givenTagToWrite?: string;

    givenWriteData?(givenData: string): void;
    givenDataToWrite?: string;


}

export default function Object_Button_ArrowDown(props: Object_Button_ArrowDown_Props) {



    const [buttonClassString, setButtonClassString] = useState("");
    const [buttonTextClassString, setButtonTextClassString] = useState("");






    useEffect(() => { SelectButtonStyle() }, []);


    function SelectButtonStyle() {


        if (props.givenButtonStyle === "primary") {
            setButtonClassString(`normal-button-primary${props.givenGlobal_isMobile}`);
            setButtonTextClassString(`normal-button-arrow-down-primary-text${props.givenGlobal_isMobile}`);

        }
        else if (props.givenButtonStyle === "secondary") {
            setButtonClassString(`normal-button-secondary${props.givenGlobal_isMobile}`);
            setButtonTextClassString(`normal-button-arrow-down-secondary-text${props.givenGlobal_isMobile} `);

        }
        else if (props.givenButtonStyle === "tertiary") {
            setButtonClassString(`normal-button-tertiary${props.givenGlobal_isMobile}`);
            setButtonTextClassString(`normal-button-arrow-down-tertiary-text${props.givenGlobal_isMobile} `);

        }

    }




    function OnClickDown() {
        //console.log("Attempting to go to: " + props.givenDestination + " from Swipe Down Button!")


        if (props.givenTagToWrite != "" && props.givenTagToWrite != undefined) {
            props.givenWriteTags(props.givenTagToWrite);
        }


        if (props.givenDataToWrite != "" && props.givenDataToWrite != undefined) {
            props.givenWriteData(props.givenDataToWrite)
        }


        props.givenGoToDestination(props.givenDestination);
    }











    function RenderNormalButton() {
        return (


            <div className={`object-button-arrow-down-parent${props.givenGlobal_isMobile}`}
                onClick={() => { OnClickDown() }}
                role="button"
                tabIndex={0}
                aria-label="Navigation"
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        OnClickDown();
                    }
                }}
            >
                {props.givenButtonText !== "" ? (
                    <div className={buttonTextClassString}>
                        {props.givenButtonText}
                    </div>
                ) : null}
                <div className={`object-button-arrow-down${props.givenGlobal_isMobile}`} >
                    {/*     <FontAwesomeIcon
                        icon={faAngleDown as IconProp}
                        className={"object-icon-arrow-down"}
                    /> */}
                    <img
                        // className={`image-object${props.givenGlobal_isMobile} `}
                        className={`object-icon-arrow-down${props.givenGlobal_isMobile} `}
                        src={`/assets/icon-arrow-down-fh.png`}
                        alt={"missing image with name: " + "icon-arrow-down-fh.png"}>
                    </img>
                </div>


            </div>







        )
    }



    return (
        RenderNormalButton()
    )

}