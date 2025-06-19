import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Item_NavBarSpacer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";





export default function Object_Item_NavBarSpacer() {

    function RenderNormalButton() {
        return (<div className={"object-navbar-spacer-parent"}>

        </div>)
    }



    return (
        RenderNormalButton()
    )

}