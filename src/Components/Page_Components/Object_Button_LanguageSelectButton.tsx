import { useEffect, useState } from "react";
import "../../CSS/Page_Component_Styles/Object_Button_LanguageSelectButton.css"
import Object_Item_Text from "./Object_Item_Text";
import { BaseCarouselChildProps } from "../../BaseProps";
interface Object_Button_LanguageSelectButton_Props extends BaseCarouselChildProps {
    givenButtonIndex: number;
    givenCurrentButtonIndex: number;
    givenButtonTextValue: string;
    givenSetCurrentButtonIndex(givenNumber: number): void;
    givenSetCurrentLanguageSelectedString(givenString: string): void;
}


export default function Object_Button_LanguageSelectButton(props: Object_Button_LanguageSelectButton_Props) {

    const [styleToUse, setStyleToUse] = useState("unpressed");

    useEffect(() => {
        if (props.givenButtonIndex === props.givenCurrentButtonIndex) {
            setStyleToUse("pressed");
        }
        else {
            setStyleToUse("unpressed");
        }
    }, [props.givenCurrentButtonIndex])

    function HandleOnClick() {

        if (props.givenButtonIndex === props.givenCurrentButtonIndex) {//means we're currently pressed
            setStyleToUse("unpressed");
            props.givenSetCurrentLanguageSelectedString("null");
            props.givenSetCurrentButtonIndex(-1);
        }
        else {
            setStyleToUse("pressed")
            props.givenSetCurrentLanguageSelectedString(props.givenButtonTextValue.toLocaleLowerCase());
            props.givenSetCurrentButtonIndex(props.givenButtonIndex)
        }


    }

    return (

        <div
            className={`object-button-languageSelect-parent-${styleToUse}${props.givenGlobal_isMobile}`}
            onClick={() => { HandleOnClick(); }}
        >
            <Object_Item_Text
                givenTextValue={props.givenButtonTextValue}
                givenTextType={"buttonText"}
                givenTextAlignment="center"
                givenGlobal_isMobile={props.givenGlobal_isMobile}
                givenGlobal_CurrentCarouselIndex={0}
                givenGlobal_PreviousCarouselIndex={0}
            /></div>




    )

}