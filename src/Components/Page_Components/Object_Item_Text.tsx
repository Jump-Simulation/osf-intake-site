import { useState, useEffect } from "react";
import "../../CSS/Page_Component_Styles/Brand-Colors.css";
import "../../CSS/Page_Component_Styles/Object_Item_Text.css";
import { BaseCarouselChildProps } from "../../BaseProps";

type TextAlignOptions = "left" | "right" | "center" | "justify" | "start" | "end" | "match-parent";


interface Object_Item_Text_Props extends BaseCarouselChildProps {

    givenTextValue: string;
    givenTextType: string;

    givenTextAlignment: TextAlignOptions;

    givenTagsTrueArray?: string;
    givenTagsFalseArray?: string;

    givenTagInclusion?: string;
    givenTagExclusion?: string;

    givenTextColor?: string;
    givenTextContainerColor?: string;

    givenIconVisible?: boolean;
    givenIconFileName?: string;
    givenIconHorizontalPlcement?: string;

    givenIconSizeOverride?: string;


    givenLockNumber?: number;
    givenCheckTagsToDetermineRendering?(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;
}



export default function Object_Item_Text(props: Object_Item_Text_Props) {

    const [textToRender, setTextToRender] = useState(props.givenTextValue)
    const [shouldRender, setShouldRender] = useState(true);

    const [hasContainerColor, setHasContainerColor] = useState<boolean>(props.givenTextContainerColor !== "");

    const [hasIcon, setHasIcon] = useState(props.givenIconVisible || false);
    const [iconFileName, setIconFileName] = useState(props.givenIconFileName || "");
    const [iconHorizontalPlacement, setIconHorizontalPlacement] = useState(props.givenIconHorizontalPlcement || "left");


    useEffect(() => {
        /* 
                if (props.globalGiven_PatientNameFirst !== "null") { */
        //should ensure we've actually pulled a patient

        /*  console.log("we got text to replace!! Patient's first name is: " + props.globalGiven_PatientNameFirst)
        */

        var newFilteredText = props.givenTextValue.replace(/\{([A-Z_]+)\}/g, (match) => {
            // Check the detected placeholder and replace accordingly
            if (match === "{PATIENT_NAME}") {
                if (props.givenGlobal_PatientNameFirst !== "null") {
                    return props.givenGlobal_PatientNameFirst + " " + props.givenGlobal_PatientNameLast;
                }
                else {
                    return "Patient";
                }

            } else if (match === "{PROCEDURE_DATE}") {
                if (props.givenGlobal_PatientDateOfProcedure !== "null") {
                    var date = new Date(props.givenGlobal_PatientDateOfProcedure);
                    var newDateToPrint: string;
                    newDateToPrint = date.toLocaleDateString("en-US", {
                        month: "long", // Full month name (e.g., "January")
                        day: "numeric", // Day of the month (e.g., "7")
                        year: "numeric", // Full year (e.g., "2025")
                    });
                    return newDateToPrint; /* + " at " + props.globalGiven_PatientTimeOfProcedure */;
                }
                else {
                    return "your procedure date";
                }
            }
            else if (match === "{PROCEDURE_NAME}") {
                if (props.givenGlobal_PatientProcedureName !== "null") {

                    const formattedText = props.givenGlobal_PatientProcedureName.toLowerCase();


                    return formattedText
                }
                else {
                    return "procedure"
                }

            }
            else {
                // Return the placeholder unchanged if not handled
                return match;
            }
        })

        setTextToRender(newFilteredText);


        /*   }
          else {
              console.log("TEXT ITEM useEffect fired, but patient first name was null!")
          } */



    }, [props.givenGlobal_PatientNameFirst, props.givenGlobal_CurrentCarouselIndex])


    useEffect(() => {
        if (props.givenCheckTagsToDetermineRendering != undefined) {
            setShouldRender(props.givenCheckTagsToDetermineRendering(props.givenTagInclusion,
                props.givenTagExclusion,
                props.givenTextValue,
                "TEXT OBJECT", props.givenGlobal_ShouldExcludeByDefault));

        }
           /*         console.log("VALUE WE SHOULD EXPECT FROM TAGS FUNCTION: " + props.givenCheckTagsToDetermineRendering(props.givenTagInclusion, props.givenTagExclusion, props.givenTextValue, "TEXT OBJECT"));
 */    }, [props.givenTagsTrueArray, props.givenTagsFalseArray])


    /* 
        useEffect(() => { console.log("SHOULD RENDER CHANGED, IT'S VALUE IS NOW: " + shouldRender) }, [shouldRender])
    
     */
    function RenderH1Type() {

        return (


            <div style={{
                color: props.givenTextColor === "" ? "" : props.givenTextColor
                , textAlign: `${props.givenTextAlignment}`
            }}
                data-shouldrender={shouldRender}
                className={`textObject-h1${props.givenGlobal_isMobile}`}>

                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderLeftIcon()}
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <div

                        dangerouslySetInnerHTML={{ __html: textToRender }}
                    ></div>
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderRightIcon()}
                </span>
            </div>


        )

    }

    function RenderH2Type() {
        return (


            <div style={{
                color: props.givenTextColor === "" ? "" : props.givenTextColor
                , textAlign: `${props.givenTextAlignment}`
            }}
                data-shouldrender={shouldRender}
                className={`textObject-h2${props.givenGlobal_isMobile}`}>

                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderLeftIcon()}
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <div

                        dangerouslySetInnerHTML={{ __html: textToRender }}
                    ></div>
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderRightIcon()}
                </span>
            </div>

        )
    }

    function RenderH2NavigationType() {
        return (

            <div style={{
                color: props.givenTextColor === "" ? "" : props.givenTextColor
                , textAlign: `${props.givenTextAlignment}`
            }}
                data-shouldrender={shouldRender}
                className={`textObject-h2-navigation${props.givenGlobal_isMobile}`}>

                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderLeftIcon()}
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <div

                        dangerouslySetInnerHTML={{ __html: textToRender }}
                    ></div>
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderRightIcon()}
                </span>
            </div>

        )
    }

    function RenderH2ConfirmType() {
        return (

            <div style={{
                color: props.givenTextColor === "" ? "" : props.givenTextColor
                , textAlign: `${props.givenTextAlignment}`
            }}
                data-shouldrender={shouldRender}
                className={`textObject-h2-confirm${props.givenGlobal_isMobile}`}>

                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderLeftIcon()}
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <div

                        dangerouslySetInnerHTML={{ __html: textToRender }}
                    ></div>
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderRightIcon()}
                </span>
            </div>

        )
    }

    function RenderH3Type() {
        return (

            <div style={{
                color: props.givenTextColor === "" ? "" : props.givenTextColor
                , textAlign: `${props.givenTextAlignment}`
            }}
                data-shouldrender={shouldRender}
                className={`textObject-h3${props.givenGlobal_isMobile}`}>

                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderLeftIcon()}
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <div

                        dangerouslySetInnerHTML={{ __html: textToRender }}
                    ></div>
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderRightIcon()}
                </span>
            </div>

        )
    }

    function RenderH4Type() {
        return (


            <div style={{
                color: props.givenTextColor === "" ? "" : props.givenTextColor
                , textAlign: `${props.givenTextAlignment}`
            }}
                data-shouldrender={shouldRender}
                className={`textObject-h4${props.givenGlobal_isMobile}`}>

                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderLeftIcon()}
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <div

                        dangerouslySetInnerHTML={{ __html: textToRender }}
                    ></div>
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderRightIcon()}
                </span>
            </div>

        )
    }

    function RenderButtonTextType() {
        return (



            <div style={{
                color: props.givenTextColor === "" ? "" : props.givenTextColor
                , textAlign: `${props.givenTextAlignment}`
            }}
                data-shouldrender={shouldRender}
                className={`textObject-buttonText${props.givenGlobal_isMobile} object-text-megaParent${props.givenGlobal_isMobile}`}>

                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderLeftIcon()}
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle', width: "100%" }}>
                    <div

                        dangerouslySetInnerHTML={{ __html: textToRender }}
                    ></div>
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderRightIcon()}
                </span>
            </div>


        )
    }

    function RenderBodyTextType() {
        return (

            <div style={{
                color: props.givenTextColor === "" ? "" : props.givenTextColor
                , textAlign: `${props.givenTextAlignment}`
            }}
                data-shouldrender={shouldRender}
                className={`textObject-body${props.givenGlobal_isMobile} object-text-megaParent${props.givenGlobal_isMobile}`}>

                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderLeftIcon()}
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <div

                        dangerouslySetInnerHTML={{ __html: textToRender }}
                    ></div>
                </span>
                <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    {RenderRightIcon()}
                </span>
            </div>


        )


    }


    function RenderCaptionType() {
        return (

            <>
                <div style={{
                    color: props.givenTextColor === "" ? "" : props.givenTextColor
                    , textAlign: `${props.givenTextAlignment}`
                }}
                    data-shouldrender={shouldRender}
                    className={`textObject-caption${props.givenGlobal_isMobile} object-text-megaParent${props.givenGlobal_isMobile}`}>

                    <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        {RenderLeftIcon()}
                    </span>
                    <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <div

                            dangerouslySetInnerHTML={{ __html: textToRender }}
                        ></div>
                    </span>
                    <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        {RenderRightIcon()}
                    </span>
                </div>



            </>


        )
    }

    function RenderLeftIcon() {
        if (hasIcon && iconHorizontalPlacement === "left") {
            return (
                <img
                    className={`object-text-icon-left${props.givenGlobal_isMobile}`}
                    style={{
                        height: `var(${props.givenIconSizeOverride}${props.givenGlobal_isMobile})`,
                        width: `var(${props.givenIconSizeOverride}${props.givenGlobal_isMobile})`
                    }}
                    src={`/assets/${iconFileName.toLocaleLowerCase()}`} >
                </img>
            )
        }
    }

    function RenderRightIcon() {
        if (hasIcon && iconHorizontalPlacement === "right") {
            return (
                <img
                    className={`object-text-icon-right${props.givenGlobal_isMobile}`}
                    style={{
                        height: `var(${props.givenIconSizeOverride}${props.givenGlobal_isMobile})`,
                        width: `var(${props.givenIconSizeOverride}${props.givenGlobal_isMobile})`
                    }}
                    src={`/assets/${iconFileName.toLocaleLowerCase()}`} >
                </img>
            )
        }
    }


    function RenderTextType() {
        if (props.givenTextType === "h1") {
            return RenderH1Type();
        }
        else if (props.givenTextType === "h2") {
            return RenderH2Type();
        }
        else if (props.givenTextType == "h2-navigation") {
            return RenderH2NavigationType();
        }
        else if (props.givenTextType === "h2-confirm") {
            return RenderH2ConfirmType();
        }
        else if (props.givenTextType === "h3") {
            return RenderH3Type();
        }
        else if (props.givenTextType === "h4") {
            return RenderH4Type();
        } else if (props.givenTextType === "buttonText") {
            return RenderButtonTextType();
        }
        else if (props.givenTextType === "bodyText") {
            return RenderBodyTextType();
        }
        else if (props.givenTextType === "caption") {
            return RenderCaptionType();
        }
    }





    if (shouldRender) {
        return (
            /*     <div className={`object-text-megaParent${props.globalGiven_isMobile}`}>
    
                {RenderLeftIcon()}
                 */
            <div
                style={{
                    backgroundColor: `${props.givenTextContainerColor}`
                }}
                className={hasContainerColor ? `textObject-container${props.givenGlobal_isMobile}`
                    :
                    `textObject-container-transparent${props.givenGlobal_isMobile}`}>
                {RenderTextType()}
            </div>

            /*      {RenderRightIcon()}
                 </div> */


        )
    }
    else { return (<></>) }




}