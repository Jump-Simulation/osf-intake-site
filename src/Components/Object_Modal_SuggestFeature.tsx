import { useState } from "react";
import { BaseCarouselChildProps } from "../BaseProps";
import "../CSS/Object_Modal_SuggestFeature.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as faLightbulbRegular } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Object_Modal_SuggestFeature_Props extends BaseCarouselChildProps {
    givenShowSuggestFeatureModal: boolean;
    givenSetShowSuggestFeatureModal(givenBool: boolean): void;

    givenSendFeedback(givenFeedbackType: string, givenFeedback: string);
}

export default function Object_Modal_SuggestFeature(props: Object_Modal_SuggestFeature_Props) {

    const [currentSuggestFeatureScreen, setcurrentSuggestFeatureScreen] = useState("first");
    const [inputText, setInputText] = useState<string>("");

    // Handler to update the state when the input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    function RenderSuggestFeature() {
        return (<div
            className={`modal-suggest-feature-parent${props.givenGlobal_isMobile}`}

            onClick={() => {
                props.givenSetShowSuggestFeatureModal(false);


            }}>
            <div className={`modal-suggest-feature-child${props.givenGlobal_isMobile}`}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className={`modal-x-mark-parent${props.givenGlobal_isMobile}`} onClick={() => {
                    props.givenSetShowSuggestFeatureModal(false);
                }}>
                    <FontAwesomeIcon
                        icon={faXmark as IconProp}
                        className={`modal-x-mark${props.givenGlobal_isMobile}`}
                    />
                </div>



                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "24px"
                }}>

                    <FontAwesomeIcon
                        icon={faLightbulbRegular}
                        className={`modal-suggest-feature-globe-icon${props.givenGlobal_isMobile}`}
                    />

                    <div className={`modal-suggest-feature-text-title${props.givenGlobal_isMobile}`}>Suggest a Feature</div>

                </div>


                <div className={`modal-suggest-feature-text-body${props.givenGlobal_isMobile}`}>Got an idea for improvement, or feel like something’s missing? Tell us! Your suggestions are highly valued.
                </div>

                {/*  <div style={{ width: "100%", display: "flex", justifyContent: "start", alignItems: "center", textAlign: "start" }} className={`modal-suggest-feature-text-body${props.givenGlobal_isMobile}`}>
                    <strong>Description</strong>
                </div> */}

                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="My suggestion is..."
                    className={`modal-suggest-feature-text-input-parent${props.givenGlobal_isMobile}`}
                    rows={4} /* Adjust the number of visible rows */
                    style={{ resize: "none" }} /* Prevents manual resizing if desired */
                />

                <div

                    onClick={() => {
                        props.givenSendFeedback("suggest-a-feature", inputText),
                            setInputText(""),
                            setcurrentSuggestFeatureScreen("second");
                    }}
                    className={`modal-suggest-feature-button-primary${props.givenGlobal_isMobile}`}
                >
                    Send
                </div>



            </div>


        </div>)
    }

    function RenderFeatureSubmitted() {
        return (<div
            className={`modal-suggest-feature-parent${props.givenGlobal_isMobile}`}>
            <div className={`modal-suggest-feature-child${props.givenGlobal_isMobile}`}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "24px"
                }}>



                    <div
                        className={`modal-suggest-feature-text-title${props.givenGlobal_isMobile}`}
                    >
                        Your suggestion has been submitted.
                    </div>

                </div>


                <div className={`modal-suggest-feature-text-body${props.givenGlobal_isMobile}`}>Thank you for your feedback today! Your feedback is essential to the improvement of this tool. Please let us know if you have any other suggestions.</div>

                <div className={`modal-suggest-feature-text-body${props.givenGlobal_isMobile}`}>
                    Tap below to continue today’s directions where you left off.
                </div>




                <div

                    onClick={() => {



                        props.givenSetShowSuggestFeatureModal(false),
                            setcurrentSuggestFeatureScreen("first");
                    }}
                    className={`modal-suggest-feature-button-primary${props.givenGlobal_isMobile}`}
                >
                    Continue
                </div>



            </div>


        </div>)
    }

    function RenderModal() {
        if (props.givenShowSuggestFeatureModal === true) {

            if (currentSuggestFeatureScreen === "first") {

                return RenderSuggestFeature();
            }
            else if (currentSuggestFeatureScreen === "second") {
                return RenderFeatureSubmitted();
            }
        }
        else {
            return (<></>)
        }
    }

    return (<>{RenderModal()}</>)
}