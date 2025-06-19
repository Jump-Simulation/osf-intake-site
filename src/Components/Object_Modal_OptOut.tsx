import { useState } from "react";
import { BaseCarouselChildProps } from "../BaseProps";
import "../CSS/Object_Modal_OptOut.css"
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPersonThroughWindow, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Object_Modal_OptOut_Props extends BaseCarouselChildProps {
    givenShowOptOutModal: boolean;
    givenSetShowOptOutModal(givenBool: boolean): void;
    givenOptOutFunction(givenLocation: string): void;
    givenSendFeedback(givenFeedbackType: string, givenFeedback: string)
}

export default function Object_Modal_OptOut(props: Object_Modal_OptOut_Props) {


    const [currentOptOutScreen, setcurrentOptOutScreen] = useState("first");
    const [inputText, setInputText] = useState<string>("");

    // Handler to update the state when the input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    function RenderOptOut() {
        return (<div
            className={`modal-opt-out-parent${props.givenGlobal_isMobile}`}
            onClick={() => {
                props.givenSetShowOptOutModal(false);
            }}>
            <div className={`modal-opt-out-child${props.givenGlobal_isMobile}`}
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                <div className={`modal-x-mark-parent${props.givenGlobal_isMobile}`} onClick={() => {
                    props.givenSetShowOptOutModal(false);
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
                    gap: "24px"
                }}>

                    <FontAwesomeIcon
                        icon={faPersonThroughWindow as IconProp}
                        className={`modal-opt-out-globe-icon${props.givenGlobal_isMobile}`}
                    />

                    <div className={`modal-opt-out-text-title${props.givenGlobal_isMobile}`}>
                        Want to Opt Out?
                    </div>

                </div>


                <div className={`modal-opt-out-text-body${props.givenGlobal_isMobile}`}>
                    By choosing to opt out, you are declining any further messages.
                </div>


                <div
                    onClick={() => { setcurrentOptOutScreen("first"), props.givenSetShowOptOutModal(false); }}
                    className={`modal-opt-out-button-secondary${props.givenGlobal_isMobile}`}
                    style={{ marginBottom: "12px" }}
                >
                    Actually, keep me in
                </div>
                <div
                    onClick={() => { props.givenOptOutFunction("modal opt out"); setcurrentOptOutScreen("second"); }}
                    className={`modal-opt-out-button-primary${props.givenGlobal_isMobile}`}
                >
                    Opt out now
                </div>



            </div>


        </div>)
    }

    function RenderFeatureSubmitted() {
        return (<div
            className={`modal-opt-out-parent${props.givenGlobal_isMobile}`}>
            <div className={`modal-opt-out-child${props.givenGlobal_isMobile}`}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "24px"
                }}>



                    <div
                        className={`modal-opt-out-text-title${props.givenGlobal_isMobile}`}
                    >
                        Some Feedback Before You Leave?
                    </div>

                </div>


                <div className={`modal-opt-out-text-body${props.givenGlobal_isMobile}`}>We would greatly appreciate your feedback telling us why you are choosing to opt out of this communication. Please tell us any reasons you feel comfortable sharing.</div>

                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="I'm opting out of these messages because..."
                    className={`modal-opt-out-text-input-parent${props.givenGlobal_isMobile}`}
                    rows={4} /* Adjust the number of visible rows */
                    style={{ resize: "none" }} /* Prevents manual resizing if desired */
                />

                <div
                    onClick={() => { setcurrentOptOutScreen("first"), props.givenSetShowOptOutModal(false); }}
                    className={`modal-opt-out-button-secondary${props.givenGlobal_isMobile}`}
                    style={{ marginBottom: "12px" }}
                >
                    Skip
                </div>

                <div
                    onClick={() => { props.givenSendFeedback("opt-out-feedback", inputText), setcurrentOptOutScreen("third"); }}
                    className={`modal-opt-out-button-primary${props.givenGlobal_isMobile}`}
                >
                    Send
                </div>



            </div>

        </div>)
    }

    function RenderOptOutFeedbackSubmitted() {
        return (<div
            className={`modal-opt-out-parent${props.givenGlobal_isMobile}`}>
            <div className={`modal-opt-out-child${props.givenGlobal_isMobile}`}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "24px"
                }}>



                    <div className={`modal-opt-out-text-title${props.givenGlobal_isMobile}`}>Your feedback has been recorded.</div>

                </div>

                <div className={`modal-opt-out-text-body${props.givenGlobal_isMobile}`}>Thank you for providing us with your feedback.
                    It will be used to help make our tool a better experience for yourself and other users.
                </div>


                <div
                    onClick={() => { setcurrentOptOutScreen("first"), props.givenSetShowOptOutModal(false); }}
                    className={`modal-opt-out-button-primary${props.givenGlobal_isMobile}`}
                >
                    Continue
                </div>



            </div>


        </div>)
    }

    function RenderModal() {
        if (props.givenShowOptOutModal === true) {

            if (currentOptOutScreen === "first") {
                return RenderOptOut();
            }
            else if (currentOptOutScreen === "second") {
                return RenderFeatureSubmitted();
            }
            else if (currentOptOutScreen === "third") {
                return RenderOptOutFeedbackSubmitted();
            }
        }
        else {
            return (<></>)
        }
    }

    return (<>{RenderModal()}</>)
}