import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../CSS/Page_Component_Styles/Object_Button_Selection_Results.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { BaseCarouselChildProps } from "../../BaseProps";

interface Object_Button_Selection_Results_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenButtonText: string
}

export default function Object_Button_Selection_Results(props: Object_Button_Selection_Results_Props) {

    return (<div className={`object-button-selection-results${props.givenGlobal_isMobile}`}>

        <div className={`object-button-selection-results-icon${props.givenGlobal_isMobile}`} >
            <FontAwesomeIcon
                icon={faCheck as IconProp}

            />
        </div>
        <div className={`textObject-body-desktop${props.givenGlobal_isMobile}`}>{props.givenButtonText}</div>

    </div>)
}