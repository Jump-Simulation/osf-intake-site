import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_Prep_Confirm.css";
import { BaseCarouselChildProps } from "../../BaseProps";


interface Object_Button_Prep_Confirm_Props extends BaseCarouselChildProps {

    /*  givenMapToRead: Map<string, string[]>; */

    isMobile: string;


    givenIconBool: boolean;
    givenIconHorizontalPlacement: string;
    givenIconFileName: string;
    givenButtonDisabled: boolean;

    givenPrepDestination: string;
    givenButtonStyleNoneSelected: string;
    givenButtonStyleSomethingSelected: string;
    givenButtonTextNoneSelected: string;
    givenButtonTextSomethingSelected: string;
    givenGoToDestination(givenString: string): void;

    givenLockNumber: number;
    givenPageIndex: number;

    givenWriteTags(givenTag: string): void;

    givenWriteData(givenData: string): void;

    givenDataToWriteSomethingSelected: string;
    givenDataToWriteNothingSelected: string;

    givenTagsTrueArray: string;
    givenTagsFalseArray: string;

    givenTagInclusion: string;
    givenTagExclusion: string;

    givenTagToWrite: string;


    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;

    //STEP 1
    givenNewPrimaryColor?: string;
    givenNewHoverColor?: string;
    givenNewActiveColor?: string;
}

export default function Object_Button_Prep_Confirm(props: Object_Button_Prep_Confirm_Props) {
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(
            props.givenTagInclusion,
            props.givenTagExclusion,
            props.givenButtonTextSomethingSelected,
            "button prep confirm",
            props.givenGlobal_ShouldExcludeByDefault));

    }, [props.givenTagsTrueArray, props.givenTagsFalseArray])



    const [buttonClassString, setButtonClassString] = useState("");
    const [buttonTextClassString, setButtonTextClassString] = useState(`textObject-buttonText${props.givenGlobal_isMobile}`);

    const [buttonText, setButtonText] = useState("");

    const [internalDestination, setInternalDestination] = useState("page-000");

    /*   var internalDestination: string = ""; */

    useEffect(() => {
        /*    console.log("useEffect called for set style!!") */
        SetStyle();


        if (props.givenGlobal_LockNumber >= 1) {
            setButtonText(props.givenButtonTextNoneSelected);
        }
        else if (props.givenGlobal_LockNumber < 1) {
            setButtonText(props.givenButtonTextSomethingSelected);
        }
    }, [props.givenGlobal_LockNumber]);



    function SetStyle() {


        if (props.givenGlobal_LockNumber >= 1) {
            if (props.givenButtonStyleNoneSelected === "primary") {

                //console.log("DISABLED PRIMARY STYLE GIVEN")
                if (props.givenButtonDisabled === true) {
                    setButtonClassString(`prep-confirmation-button-primary-disabled${props.givenGlobal_isMobile}`);
                    setButtonTextClassString(`prep-confirmation-button-primary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);

                }
                else {
                    setButtonClassString(`prep-confirmation-button-primary${props.givenGlobal_isMobile}`);
                    setButtonTextClassString(`prep-confirmation-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);

                }

            }
            else if (props.givenButtonStyleNoneSelected === "secondary") {
                //console.log("DISABLED SECONDARY STYLE GIVEN")
                if (props.givenButtonDisabled === true) {
                    setButtonClassString(`prep-confirmation-button-secondary-disabled${props.givenGlobal_isMobile}`);
                    setButtonTextClassString(`prep-confirmation-button-secondary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);

                }
                else {
                    setButtonClassString(`prep-confirmation-button-secondary${props.givenGlobal_isMobile}`);
                    setButtonTextClassString(`prep-confirmation-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);

                }

            }
            else if (props.givenButtonStyleNoneSelected === "tertiary") {
                //console.log("DISABLED TERTIARY STYLE GIVEN")

                if (props.givenButtonDisabled === true) {
                    setButtonClassString(`prep-confirmation-button-tertiary-disabled${props.givenGlobal_isMobile}`);
                    setButtonTextClassString(`prep-confirmation-button-tertiary-text-disabled${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);

                }
                else {

                    setButtonClassString(`prep-confirmation-button-tertiary${props.givenGlobal_isMobile}`);
                    setButtonTextClassString(`prep-confirmation-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);

                }


            }
        }
        else if (props.givenGlobal_LockNumber < 1) { //something has been selected
            if (props.givenButtonStyleSomethingSelected === "primary") {
                //console.log("prep-confirmation PRIMARY STYLE GIVEN")
                setButtonClassString(`prep-confirmation-button-primary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`prep-confirmation-button-primary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);

            }
            else if (props.givenButtonStyleSomethingSelected === "secondary") {
                //console.log("prep-confirmation PRIMARY STYLE GIVEN")
                setButtonClassString(`prep-confirmation-button-secondary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`prep-confirmation-button-secondary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);

            }
            else if (props.givenButtonStyleSomethingSelected === "tertiary") {
                //console.log("prep-confirmation PRIMARY STYLE GIVEN")
                setButtonClassString(`prep-confirmation-button-tertiary${props.givenGlobal_isMobile}`);
                setButtonTextClassString(`prep-confirmation-button-tertiary-text${props.givenGlobal_isMobile} textObject-buttonText${props.givenGlobal_isMobile}`);

            }
        }
    }

    function OnClickPrepConfirm() {



        if (props.givenGlobal_LockNumber <= 0) { //page is unlocked, stuff has been selected
            /*  console.log("about to try moving from current page to destination: " + props.globalGiven_PrepDestination) */

            if (props.givenDataToWriteSomethingSelected != "" && props.givenDataToWriteSomethingSelected != undefined) {
                props.givenWriteData(props.givenDataToWriteSomethingSelected);
            }


            props.givenWriteTags(props.givenTagToWrite);
            props.givenGoToDestination(props.givenGlobal_PrepDestination);
        }
        else {
            //go nowhere, nothing selected
        }
    }



    function RenderPrepConfirmButton() {

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
            OnClickPrepConfirm();
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
                {buttonText}
            </div>

        </div>)
    }

    if (shouldRender) {
        return (
            RenderPrepConfirmButton()

        )
    }
    else { return (<></>) }





}





