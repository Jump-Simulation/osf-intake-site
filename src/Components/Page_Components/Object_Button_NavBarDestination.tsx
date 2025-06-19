import Object_Item_Text from "./Object_Item_Text";
import "../../CSS/Page_Component_Styles/Object_Button_NavBarDestination.css"
import { useEffect, useState } from "react";
import { BaseCarouselChildProps } from "../../BaseProps";

interface Object_Button_NavBarDestination_Props extends BaseCarouselChildProps {
    givenDestination: string;
    givenTextValue: string;
    givenSetShowNavMenu(givenBool: boolean): void;
    givenGoToDestination(givenString: string): void;
    isMobile: string;
    givenPagesVisited: string[];

    givenIndex: number;

    /* givenCurrentIndex: number; */

}


export default function Object_Button_NavBarDestination(props: Object_Button_NavBarDestination_Props) {
    const [pushButtonTrigger, setPushButtonTrigger] = useState(1)
    const [buttonStyle, setButtonStyleToUse] = useState(`nav-bar-destination-button${props.isMobile}`)

    useEffect(() => {
        /* 
                console.log("navbar givenDestination: " + props.givenDestination +
                    " and givenGlobal_CurrentPageID: " + props.givenGlobal_CurrentPageID) */

        if (props.givenDestination !== props.givenGlobal_CurrentPageID
            && props.givenPagesVisited.includes(props.givenDestination)) {

            setButtonStyleToUse(`nav-bar-destination-button${props.isMobile}`);

        }
        else if (props.givenDestination !== props.givenGlobal_CurrentPageID
            && !props.givenPagesVisited.includes(props.givenDestination)) {

            setButtonStyleToUse(`nav-bar-destination-button-disabled${props.isMobile}`);

        }
        else if (props.givenDestination === props.givenGlobal_CurrentPageID) {

            setButtonStyleToUse(`nav-bar-destination-button-highlighted${props.isMobile}`);

        }
    }, [props.givenGlobal_CurrentCarouselIndex, pushButtonTrigger])

    /*     useEffect(() => {
    
            if (!props.givenPagesVisited.includes(props.givenDestination)) {
                setButtonStyleToUse(`nav-bar-destination-button-disabled${props.isMobile}`);
            }
    
        }, [props.givenPagesVisited]) */

    return (
        <div
            className={buttonStyle}

            /*  style={{ fontSize: `--font-size-header-h2${props.isMobile}` }} */
            onClick={() => {
                setPushButtonTrigger(pushButtonTrigger * -1);
                if (props.givenPagesVisited.includes(props.givenDestination)) {
                   /*  console.log("navButton with label: " + props.givenTextValue + " trying to go to destination: " + props.givenDestination)
                    */ props.givenGoToDestination(props.givenDestination);
                }


                /* , props.givenSetShowNavMenu(false) */;
            }}>

            <Object_Item_Text

                givenTextValue={props.givenTextValue}
                givenTextType={"buttonText"}
                givenTextAlignment="start"
                givenTagsFalseArray=""
                givenTagsTrueArray=""
                givenTagExclusion=""
                givenTagInclusion=""
                givenCheckTagsToDetermineRendering={function (givenTagInclusion: string, givenTagExclusion: string): boolean {
                    return true;
                }}
                givenTextColor={""}
                givenTextContainerColor={""}
                givenGlobal_isMobile={props.isMobile}
                givenGlobal_CurrentCarouselIndex={0}
                givenGlobal_PreviousCarouselIndex={0} />
        </div>)

}