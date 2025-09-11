
import { useAppContext } from "../../App"
import "../../CSS/Page_Component_Styles/Object_Page_SubmissionSubmit.css"
import "../../CSS/Page_Component_Styles/Object_Item_Text.css"
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css"
import { SubmissionObject } from "../../types";
import Eddies_Custom_Carousel, { CarouselOrientation } from "../Eddies_Custom_Carousel";
import Eddies_Custom_Carousel_Redux from "../Eddies_Custom_Carousel_Redux";
import Object_Item_SubmissionReview_CarouselChild from "./Object_Item_SubmissionReview_CarouselChild";
import { ReactElement, useEffect, useState } from "react";
import Eddies_Custom_Carousel_Dots from "../Eddies_Custom_Carousel_Dots";
import Eddies_Custom_Carousel_Simple from "../Eddies_Custom_Carousel_Simple";

interface Object_SubmissionSubmit_Props {

}

export default function Object_Page_SubmissionSubmit(props: Object_SubmissionSubmit_Props) {

    const context = useAppContext();

    var questionLedger = context.questionLedger;

    var currentSubmission: SubmissionObject = context.localCurrentSubmissionSelected;

    console.log("all keys in currentSubmission: ", Object.keys(currentSubmission));
    console.log("currentSubmission: ", currentSubmission);

    const [carouselChildren, setCarouselChildren] = useState<ReactElement[]>([]);
    const [state_questionsAnswered, stateSet_questionsAnswered] = useState(0);

    useEffect(() => {
        // Make sure submissionData exists // currentSubmission is already flat
        const answeredCount = questionLedger.filter(qDef => {
            const val = currentSubmission[qDef.id];
            return typeof val === "string" && val.trim() !== "";
        }).length;
        stateSet_questionsAnswered(answeredCount);

        // Build carousel children in order of the ledger
        const builtChildren = questionLedger.map(qDef => {
            const value = (context.localCurrentSubmissionSelected[qDef.id] as string) || "No answer provided";
            return (
                <Object_Item_SubmissionReview_CarouselChild
                    key={qDef.id}
                    fieldName={qDef.id}
                    value={value}
                    questionText={qDef.text}
                />
            );
        });

        setCarouselChildren(builtChildren);
    }, [context.state_currentlySelectedSubmission]);




    return (
        <div className="submission-submit-holder">

            <div className="submission-submit-text-title">Ready for liftoff?</div>
            <div className="submission-submit-text-title-data">Sharing your solution with OSF
                Innovation Studio is just one click away! Review your answers to your
                submission below.</div>

            <div className="submission-submit-text-subtitle">Your Answers</div>
            <div style={{ height: "1px", width: "100%", backgroundColor: "#BFC8CA" }}></div>

            <Eddies_Custom_Carousel_Simple children={carouselChildren} />

            <div className="submission-submit-text-title-data">Sharing your solution with OSF
                Ready to go? Submit your solution by pressing the button below.</div>
            <div className="submission-submit-text-title-data">Remember, once submitted, your answers can not be changed. </div>

            <button
                className={`normal-button-primary${context.isMobileString}`}
                onClick={() => {
                    context.GoToDestination("page-submission-successful")
                }}
            >
                Submit your solution!
            </button>
        </div>)
}