import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BaseCarouselChildProps } from "../../BaseProps";


import "../../CSS/Page_Component_Styles/Object_Button_NavOptions.css"

interface Object_Button_NavOptions_Props {
    isMobile: string;
    givenShowNavOptionsMenu: boolean;
    givenSetShowNavOptionsMenu(givenBool: boolean): void;
}


export default function Object_Button_NavOptions(props: Object_Button_NavOptions_Props) {


    function OnClick() {
        if (props.givenShowNavOptionsMenu === true) {
            props.givenSetShowNavOptionsMenu(false); //should never happen
        }
        else {
            props.givenSetShowNavOptionsMenu(true);
        }
    }

    return (

        <div className={`object-button-navbar-options-parent${props.isMobile}`} onClick={() => { OnClick() }}>
            <div className={`object-button-navbar-options${props.isMobile}`} >
                {/*     <FontAwesomeIcon
                    icon={faGear as IconProp}
                    className={`object-icon-navbar-options-button${props.isMobile}`}
                /> */}

                <img
                    className={`object-icon-navbar-options-button${props.isMobile}`}
                    src={`/assets/menu-icon-fh.png`}
                />

                {/*     <img
                    className={"object-icon-navbar-menu"}
                    src={`/assets/Menu Icon ScrubbedIn.png`}

                /> */}
            </div>
        </div>

    )
}
