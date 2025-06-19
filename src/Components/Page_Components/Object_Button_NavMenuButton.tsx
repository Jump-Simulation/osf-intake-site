import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_NavMenuButton.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faBars,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";


interface Object_Button_NavMenuButton_Props {

    isMobile: string;
    givenSetShowNavMenu(givenBool: boolean): void;

}

export default function Object_Button_NavMenuButton(props: Object_Button_NavMenuButton_Props) {









    function OnClick() {
        /* console.log("WE SHOULD BE SEEING THE NAV MENU!!"); */
        props.givenSetShowNavMenu(true);
    }


    function RenderNormalButton() {
        return (
            <div
                className={`object-button-navbar-menu-parent${props.isMobile}`}
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
                <div className={`object-button-navbar-menu${props.isMobile}`}>
                    <FontAwesomeIcon
                        icon={faBars as IconProp}
                        className={`object-icon-navbar-menu${props.isMobile}`}
                    />
                </div>
            </div>
        );
    }


    return (
        RenderNormalButton()
    )

}