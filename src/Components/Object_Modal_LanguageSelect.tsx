import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/Object_Modal_LanguageSelect.css"
import { faGlobe, faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Object_Item_Text from "./Page_Components/Object_Item_Text";

import { useState } from "react";
import { BaseCarouselChildProps } from "../BaseProps";
import Object_Button_LanguageSelectButton from "./Page_Components/Object_Button_LanguageSelectButton";

import Object_Button_LanguageSelectionConfirm from "./Page_Components/Object_Button_LanguageSelectConfirm";

interface Object_Modal_LanguageSelect_Props extends BaseCarouselChildProps {

    givenShowLanguageSelectModal: boolean;
    givenSetShowLanguageSelectModal(givenBool: boolean): void;
}

export default function Object_Modal_LanguageSelect(props: Object_Modal_LanguageSelect_Props) {

    const [currentLanguageSelectedIndex, setCurrentLanguageSelectedIndex] = useState(-1);
    const [currentLanguageSelectedString, setCurrentLanguageSelectedString] = useState("english")

    function RenderModal() {

        if (props.givenShowLanguageSelectModal === true) {
            return (<div className={`modal-language-select-parent${props.givenGlobal_isMobile}`}

                onClick={() => {
                    props.givenSetShowLanguageSelectModal(false);


                }}
            >
                <div className={`modal-language-select-child${props.givenGlobal_isMobile}`}

                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className={`modal-x-mark-parent${props.givenGlobal_isMobile}`} onClick={() => {
                        props.givenSetShowLanguageSelectModal(false);
                    }}>
                        <FontAwesomeIcon
                            icon={faXmark as IconProp}
                            className={`modal-x-mark${props.givenGlobal_isMobile}`}
                        />
                    </div>
                    <FontAwesomeIcon
                        icon={faGlobe as IconProp}
                        className={`modal-language-select-globe-icon${props.givenGlobal_isMobile}`}
                    />
                    <Object_Item_Text
                        givenTextValue={"Language"}
                        givenTextType={"h2-navigation"}

                        givenTextAlignment="center"

                        givenGlobal_isMobile={props.givenGlobal_isMobile}
                        givenGlobal_CurrentCarouselIndex={0}
                        givenGlobal_PreviousCarouselIndex={0} />

                    <div className={`modal-language-select-buttons-parent${props.givenGlobal_isMobile}`}>
                        <Object_Button_LanguageSelectButton
                            givenButtonIndex={0}
                            givenCurrentButtonIndex={currentLanguageSelectedIndex}
                            givenSetCurrentButtonIndex={setCurrentLanguageSelectedIndex}
                            givenSetCurrentLanguageSelectedString={setCurrentLanguageSelectedString}
                            givenButtonTextValue={"English"}
                            givenGlobal_isMobile={props.givenGlobal_isMobile}
                            givenGlobal_CurrentCarouselIndex={0}
                            givenGlobal_PreviousCarouselIndex={0} />

                        <Object_Button_LanguageSelectButton
                            givenButtonIndex={1}
                            givenCurrentButtonIndex={currentLanguageSelectedIndex}
                            givenSetCurrentButtonIndex={setCurrentLanguageSelectedIndex}
                            givenSetCurrentLanguageSelectedString={setCurrentLanguageSelectedString}
                            givenButtonTextValue={"Español"}
                            givenGlobal_isMobile={props.givenGlobal_isMobile}
                            givenGlobal_CurrentCarouselIndex={0}
                            givenGlobal_PreviousCarouselIndex={0} />

                        <Object_Button_LanguageSelectionConfirm
                            givenCurrentLanguageButtonIndex={currentLanguageSelectedIndex}
                            givenCurrentLanguageSelectedString={currentLanguageSelectedString}
                            givenWriteCurrentLanguageSelection={function (givenString: string): void {
                                console.log("IMPLEMENT THE FUNCTION TO WRITE THE PREFERED LANGUAGE TO TAGS HERE, TODO!!");
                            }}
                            givenSetShowLanguageSelectModal={props.givenSetShowLanguageSelectModal}
                            givenGlobal_isMobile={props.givenGlobal_isMobile}
                            givenGlobal_CurrentCarouselIndex={0}
                            givenGlobal_PreviousCarouselIndex={0} />

                    </div>


                </div>

            </div>)
        }
        else {
            return (<></>)
        }

    }

    return (<>{RenderModal()}</>)
}