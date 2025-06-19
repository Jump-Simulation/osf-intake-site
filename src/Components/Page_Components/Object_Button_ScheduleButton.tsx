import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_ScheduleButton.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faBars,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";
import Object_Button_IconButton from "./Object_Button_IconButton";


interface Object_Button_ScheduleButton_Props {

    isMobile: string;
    givenDestination: string;
    givenGoToDestination(givenString: string): void;


    //STEP 1
    givenNewPrimaryColor: string;
    givenNewHoverColor: string;
    givenNewActiveColor: string;

}

export default function Object_Button_ScheduleButton(props: Object_Button_ScheduleButton_Props) {



    function OnClick() {
        /* console.log("WE SHOULD BE SEEING THE NAV MENU!!"); */
        props.givenGoToDestination(props.givenDestination);
    }


    function RenderScheduleButton() {


        //STEP 2
        const customStyles = {
            background: props.givenNewPrimaryColor,
            transition: "background 0.3s ease-in-out",

        };

        const hoverStyles = {
            background: props.givenNewHoverColor,
            transition: "background 0.3s ease-in-out",
        };

        const activeStyles = {
            background: props.givenNewActiveColor,
            transition: "background 0.3s ease-in-out",

        };

        return (
            <div
                className={`object-button-schuedule-parent${props.isMobile}`}
                onClick={() => { OnClick() }}
                role="button"
                tabIndex={0}
                aria-label="Navigation"
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        OnClick();
                    }
                }}


            >
                <div className={`object-button-navbar-schedule${props.isMobile}`}

                    style={{ background: props.givenNewPrimaryColor }}

                    /* STEP 3 */
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyles)} // Desktop hover
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, customStyles)} // Desktop hover end
                    onMouseDown={(e) => Object.assign(e.currentTarget.style, activeStyles)} // Desktop active
                    onMouseUp={(e) => Object.assign(e.currentTarget.style, hoverStyles)} // Desktop release

                    // Mobile Touch Support
                    onTouchStart={(e) => Object.assign(e.currentTarget.style, activeStyles)} // Mobile press
                    onTouchEnd={(e) => Object.assign(e.currentTarget.style, customStyles)} // Mobile release

                >
                    <img
                        className={`object-icon-navbar-schedule${props.isMobile}`}
                        src={`/assets/schedule-icon-fh.png`} >
                    </img>
                </div>
            </div>
        );
    }


    return (
        RenderScheduleButton()
    )

}