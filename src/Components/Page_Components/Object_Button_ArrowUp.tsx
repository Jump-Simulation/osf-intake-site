import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_ArrowUp.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";


interface Object_Button_ArrowUp_Props extends BaseCarouselChildProps {

    isMobile: string;
    givenGoToDestination(givenString: string): void;

    givenCurrentPageIndex: number;

}

export default function Object_Button_ArrowUp(props: Object_Button_ArrowUp_Props) {
    //givenGlobal_CurrentCarouselIndex

    const [shouldRender, setShouldRender] = useState(props.givenGlobal_CurrentCarouselIndex != 0)

    useEffect(() => {
        if (props.givenGlobal_CurrentCarouselIndex != 0) {
            setShouldRender(true);
        } else if (props.givenGlobal_CurrentCarouselIndex === 0) {
            setShouldRender(false);
        }
    }, [props.givenGlobal_CurrentCarouselIndex])




    function OnClickUp() {
        console.log("Attempting to go to: page_previous from Swipe Up Button!")
        props.givenGoToDestination("page_previous")
    }



    function RenderNormalButton() {
        return (

            <div className={`object-button-arrow-up-parent${props.givenGlobal_isMobile}`} onClick={() => { OnClickUp(); }}>
                <div className={`object-button-arrow-up${props.givenGlobal_isMobile}`} >
                    {/*      <FontAwesomeIcon
                        icon={faAngleUp as IconProp}
                        className={`object-icon-arrow-up${props.givenGlobal_isMobile}`}
                    /> */}

                    <img
                        // className={`image-object${props.givenGlobal_isMobile} `}
                        className={`object-icon-arrow-up${props.givenGlobal_isMobile} `}
                        src={`/assets/icon-arrow-up-fh.png`}
                        alt={"missing image with name: " + "icon-arrow-down-fh.png"}>
                    </img>
                </div>
            </div>)
    }



    if (shouldRender) {
        return (RenderNormalButton())
    }
    else {

    }



}