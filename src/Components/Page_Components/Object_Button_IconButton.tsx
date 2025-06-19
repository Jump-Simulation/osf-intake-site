import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_IconButton.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";
import { Col, Row } from "react-bootstrap";


interface Object_Button_IconButton_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenIconHorizontalPlacement: string;
    givenIconFileName: string;


    givenButtonText: string;


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

    // New Props
    //STEP 1
    givenNewPrimaryColor?: string;
    givenNewHoverColor?: string;
    givenNewActiveColor?: string;
    givenNewBoxShadow?: string;
    givenIconSize?: string;

}

export default function Object_Button_IconButton(props: Object_Button_IconButton_Props) {

    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(props.givenTagInclusion, props.givenTagExclusion, props.givenIconFileName, "image type", props.givenGlobal_ShouldExcludeByDefault));
        /* console.log("IconButton BUTTON SAW A CHANGE IN TAG ARRAYS") */
    }, [props.givenTagsTrueArray, props.givenTagsFalseArray])

    const [buttonClassString, setButtonClassString] = useState(`icon-button-primary${props.givenGlobal_isMobile}`);
    const [buttonTextClassString, setButtonTextClassString] = useState(`textObject-buttonText${props.givenGlobal_isMobile}`);
    const [buttonIconClassString, setButtonIconClassString] = useState("");
    const [isDisabled, setIsDisabled] = useState(props.givenIsDisabled);




    function OnClickIconButton() {

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

    function RenderIcon() {

        return (
            <img
                // className={`object-text-icon-left${props.givenGlobal_isMobile}`}
                className={`icon-button-icon-actual${props.givenGlobal_isMobile}`}
                style={{ height: props.givenIconSize, widows: props.givenIconSize }}
                src={`/assets/${props.givenIconFileName.toLocaleLowerCase()}`} >
            </img>
        )

    }


    function RenderIconButton() {

        //STEP 2
        const customStyles = {
            background: props.givenNewPrimaryColor,
            transition: "background 0.3s ease-in-out",
            boxShadow: props.givenNewBoxShadow,

        };

        const hoverStyles = {
            background: props.givenNewHoverColor,
            transition: "background 0.3s ease-in-out",
            boxShadow: props.givenNewBoxShadow,
        };

        const activeStyles = {
            background: props.givenNewActiveColor,
            transition: "background 0.3s ease-in-out",
            boxShadow: props.givenNewBoxShadow,

        };


        return (
            <div
                className={`icon-button-icon-holder-holder${props.givenGlobal_isMobile}`}
                style={{
                    width: props.givenIconHorizontalPlacement === "center" ? "100%" : "",
                    maxWidth: props.givenIconHorizontalPlacement === "center" ? "100%" : "",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",

                }}>

                <span className={`icon-button-icon-holder${props.givenGlobal_isMobile}`} style={{


                    background: props.givenNewPrimaryColor,
                    marginRight: props.givenIconHorizontalPlacement === "center" ? "0" : "auto",
                    boxShadow: props.givenNewBoxShadow,

                }}

                    onClick={() => {

                        OnClickIconButton();
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
                    {RenderIcon()}
                </span>
            </div>









/* 
        </div> */)
    }

    if (shouldRender) {
        return (
            RenderIconButton()
        )
    }
    else { return (<></>) }




}