import { useState } from "react";
import "../CSS/Object_Modal_ReportProblem.css"
import { BaseCarouselChildProps } from "../BaseProps";
import Object_Item_Text from "./Page_Components/Object_Item_Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag as faFlagRegular } from "@fortawesome/free-regular-svg-icons";
import Object_Button_PhoneNumber from "./Page_Components/Object_Button_PhoneNumber";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Object_Modal_ReportProblem_Props extends BaseCarouselChildProps {
    givenShowReportProblemModal: boolean;
    givenSetShowReportProblemModal(givenBool: boolean): void;
    givenIncrementFirestoreVariable(givenVariableName: string, givenLocation: string): void;
    givenSendFeedback(givenFeedbackType: string, givenFeedback: string);

}

export default function Object_Modal_ReportProblem(props: Object_Modal_ReportProblem_Props) {

    const [currentReportProblemScreen, setCurrentReportProblemScreen] = useState("first");
    const [inputText, setInputText] = useState<string>("");

    // Handler to update the state when the input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    };

    function RenderReportProblem() {
        return (<div
            className={`modal-report-problem-parent${props.givenGlobal_isMobile}`}
            onClick={() => {
                props.givenSetShowReportProblemModal(false);


            }}>
            <div className={`modal-report-problem-child${props.givenGlobal_isMobile}`}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className={`modal-x-mark-parent${props.givenGlobal_isMobile}`} onClick={() => {
                    props.givenSetShowReportProblemModal(false);
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
                        icon={faFlagRegular}
                        className={`modal-report-problem-globe-icon${props.givenGlobal_isMobile}`}
                    />

                    <div className={`modal-report-problem-text-title${props.givenGlobal_isMobile}`}>Report a Problem</div>
                </div>


                <div className={`modal-report-problem-text-body${props.givenGlobal_isMobile}`}>Please report any problems or errors you encounter when using the site.

                </div>

                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="The problem I am having is..."
                    className={`modal-report-problem-text-input-parent${props.givenGlobal_isMobile}`}
                    rows={4} /* Adjust the number of visible rows */
                    style={{ resize: "none" }} /* Prevents manual resizing if desired */
                />

                <div
                    onClick={() => {

                        props.givenSendFeedback("report-a-problem", inputText),
                            setInputText(""),
                            setCurrentReportProblemScreen("second");

                    }}
                    className={`modal-report-problem-button-primary${props.givenGlobal_isMobile}`}
                >
                    Send
                </div>



            </div>


        </div>)
    }

    function RenderReportSubmitted() {
        return (<div
            className={`modal-report-problem-parent${props.givenGlobal_isMobile}`}>
            <div className={`modal-report-problem-child${props.givenGlobal_isMobile}`}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "24px"
                }}>


                    <div
                        className={`modal-report-problem-text-title${props.givenGlobal_isMobile}`}
                    >
                        Your report has been submitted.
                    </div>

                </div>


                <div className={`modal-report-problem-text-body${props.givenGlobal_isMobile}`}>Please report any problems or errors you encounter when using the site.
                    Thank you for reporting your problem to us. We will work on fixing your issue as soon as possible.</div>

                <div className={`modal-report-problem-text-body${props.givenGlobal_isMobile}`}>
                    If you are able, please continue with your directions for today.
                    If you cannot continue, please refer to your paper copy or contact the GI Office
                    <b> 8:00am-4:00pm, Mon-Fri</b> with any questions.
                </div>



                <Object_Button_PhoneNumber
                    givenPhoneNumberHardCoded={"3096552000"}
                    givenButtonText={"Call the GI Office"}
                    givenButtonStyle={"secondary"}
                    givenIsDisabled={false}
                    givenTagsTrueArray={""}
                    givenTagsFalseArray={""}
                    givenTagInclusion={""}
                    givenTagExclusion={""}
                    givenCheckTagsToDetermineRendering={function (givenTagInclusion: string, givenTagExclusion: string, givenObjectName?: string): boolean {
                        return true;
                    }}
                    givenGlobal_isMobile={props.givenGlobal_isMobile}
                    givenGlobal_CurrentCarouselIndex={0}
                    givenGlobal_PreviousCarouselIndex={0}


                    givenIncrementFirestoreVariable={props.givenIncrementFirestoreVariable}
                    givenGlobal_CurrentPageID={props.givenGlobal_CurrentPageID}
                    givenGlobal_CurrentModalID={"ReportProblemModal"} />
                <div

                    onClick={() => { props.givenSetShowReportProblemModal(false), setCurrentReportProblemScreen("first"); }}
                    className={`modal-report-problem-button-primary${props.givenGlobal_isMobile}`}
                >
                    Continue
                </div>



            </div>


        </div>)
    }

    function RenderModal() {
        if (props.givenShowReportProblemModal === true) {

            if (currentReportProblemScreen === "first") {
                return RenderReportProblem();
            }
            else if (currentReportProblemScreen === "second") {
                return RenderReportSubmitted();
            }
        }
        else {
            return (<></>)
        }
    }

    return (<>{RenderModal()}</>)
}