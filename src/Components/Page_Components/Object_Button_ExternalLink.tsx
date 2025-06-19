import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import "../../CSS/Page_Component_Styles/Object_Button_ExternalLink.css";
import { BaseCarouselChildProps } from "../../BaseProps";

interface Object_Button_ExternalLink_Props extends BaseCarouselChildProps {
    givenLinkText: string;
    givenNewTab: boolean;
    isMobile: string;

    givenIconBool: boolean;
    givenButtonText: string;
    givenButtonStyle: string;
    givenIsDisabled: boolean;

    givenTagsTrueArray: string;
    givenTagsFalseArray: string;

    givenTagInclusion: string;
    givenTagExclusion: string;


    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;


    //STEP 1
    givenNewPrimaryColor?: string;
    givenNewHoverColor?: string;
    givenNewActiveColor?: string;
}

export default function Object_Button_ExternalLink(props: Object_Button_ExternalLink_Props) {


    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(
            props.givenTagInclusion,
            props.givenTagExclusion,
            props.givenButtonText,
            "button external link",
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
                setButtonClassString(`external-link-button-primary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`external-link-button-primary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`external-link-button-primary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                //console.log("DISABLED SECONDARY STYLE GIVEN")
                setButtonClassString(`external-link-button-secondary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`external-link-button-secondary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`external-link-button-secondary-icon-disabled${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                //console.log("DISABLED TERTIARY STYLE GIVEN")
                setButtonClassString(`external-link-button-tertiary-disabled${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`external-link-button-tertiary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`external-link-button-tertiary-icon-disabled${props.givenGlobal_isMobile}`);
            }
        }
        else if (!isDisabled) {
            if (props.givenButtonStyle === "primary") {
                //console.log("external-link PRIMARY STYLE GIVEN")
                setButtonClassString(`external-link-button-primary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`external-link-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`external-link-button-primary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "secondary") {
                //console.log("external-link PRIMARY STYLE GIVEN")
                setButtonClassString(`external-link-button-secondary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`external-link-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`external-link-button-secondary-icon${props.givenGlobal_isMobile}`);
            }
            else if (props.givenButtonStyle === "tertiary") {
                //console.log("external-link PRIMARY STYLE GIVEN")
                setButtonClassString(`external-link-button-tertiary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`external-link-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);
                setButtonIconClassString(`external-link-button-tertiary-icon${props.givenGlobal_isMobile}`);
            }
        }
    }

    function OnClickExternal(url: string) {
        if (props.givenNewTab === true) {
            // console.log("we pressed an external link with a newTab === true")
            // console.log("url is: " + url)
            window.open(url, "_blank");
        }
        else if (props.givenNewTab === false) {
            // console.log("we pressed an external link with a newTab === false")
            // console.log("url is: " + url)
            window.open(url, "_self");
        }
        else {
            // console.log("we pressed an external link with a newTab === false")
            // console.log("url is: " + url)
            window.open(url, "_self");
        }

    }

    function RenderExternalLinkButton() {

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




        return (<div className={buttonClassString}
            onClick={() => { OnClickExternal(props.givenLinkText) }}
            /* STEP 3 */

            style={{ background: props.givenNewPrimaryColor, border: `1px solid ${props.givenNewPrimaryColor}` }}
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
            RenderExternalLinkButton()
        )

    }
    else { return (<></>) }




}