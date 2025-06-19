import { BaseCarouselChildProps } from "../../BaseProps";
import Object_Item_Text from "./Object_Item_Text";

import "../../CSS/Page_Component_Styles/Object_Button_LanguageSelectionConfirm.css"
import { useEffect, useState } from "react";

interface Object_Button_LanguageSelectConfirm extends BaseCarouselChildProps {
    givenCurrentLanguageButtonIndex: number;
    givenCurrentLanguageSelectedString: string;
    givenWriteCurrentLanguageSelection(givenString: string): void;
    givenSetShowLanguageSelectModal(givenBool: boolean): void;
}

export default function Object_Button_LanguageSelectionConfirm(props: Object_Button_LanguageSelectConfirm) {

    var canBePressed: boolean = false;
    const [continueButtonString, setContinueButtonString] = useState("Continue");

    useEffect(() => {
        console.log("given language string: " + props.givenCurrentLanguageSelectedString);
        if (props.givenCurrentLanguageSelectedString === "english") {
            setContinueButtonString("Continue");
        }
        else if (props.givenCurrentLanguageSelectedString === "español") {
            console.log("should be seeing spanish string!! ");
            setContinueButtonString("Continuar");
        }
    }, [props.givenCurrentLanguageSelectedString])

    function RenderConfirmButton() {
        if (props.givenCurrentLanguageButtonIndex != -1) {
            canBePressed = true;
            return (<div className={`language-selection-confirmation-button${props.givenGlobal_isMobile}`}

                onClick={() => {
                    props.givenWriteCurrentLanguageSelection(props.givenCurrentLanguageSelectedString),
                        props.givenSetShowLanguageSelectModal(false);
                }}

            >
                <div
                    className={`language-selection-confirmation-button-text${props.givenGlobal_isMobile}`}
                >{continueButtonString}</div>
            </div>)
        }
        else {
            canBePressed = false;
            return (<Object_Item_Text
                givenTextValue={"Select a language"}
                givenTextType={"buttonText"}
                givenTextAlignment="center"
                givenTextColor="var(--color-on-surface-variant)"
                givenGlobal_isMobile={props.givenGlobal_isMobile}
                givenGlobal_CurrentCarouselIndex={0}
                givenGlobal_PreviousCarouselIndex={0} />)
        }
    }

    return <>{RenderConfirmButton()}</>

}