
import { useAppContext } from "../../App"
import "../../CSS/Page_Component_Styles/Object_Item_SubmissionReviewActual.css"
import "../../CSS/Page_Component_Styles/Object_Item_Text.css"
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css"
import { SubmissionObject } from "../../types";
import Eddies_Custom_Carousel, { CarouselOrientation } from "../Eddies_Custom_Carousel";
import Eddies_Custom_Carousel_Redux from "../Eddies_Custom_Carousel_Redux";
import Object_Item_SubmissionReview_CarouselChild from "./Object_Item_SubmissionReview_CarouselChild";
import { ReactElement, useEffect, useState } from "react";
import Eddies_Custom_Carousel_Dots from "../Eddies_Custom_Carousel_Dots";
import Eddies_Custom_Carousel_Simple from "../Eddies_Custom_Carousel_Simple";

interface Object_SubmissionReview_Props {

}

export default function Object_Item_SubmissionReviewActual(props: Object_SubmissionReview_Props) {

    const context = useAppContext();

    var questionLedger = context.questionLedger;

    var currentSubmission: SubmissionObject = context.localCurrentSubmissionSelected;

    // console.log("all keys in currentSubmission: ", Object.keys(currentSubmission));
    // console.log("currentSubmission: ", currentSubmission);

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
        <div className="submission-review-holder">

            <div className="submission-review-text-title">Submission Review</div>
            <div className="submission-review-text-title-data">Solution Name:</div>
            <div className="submission-review-text-data">{currentSubmission.q_idea_name || "Unnamed"}</div>
            <div className="submission-review-text-title-data">Started:</div>
            <div className="submission-review-text-data">{currentSubmission.dateCreated.toDate().toLocaleDateString("en-US")}</div>
            <div className="submission-review-text-title-data">Questions Answered:</div>
            <div className="submission-review-text-data">{state_questionsAnswered} / {carouselChildren.length} </div>
            <div className="submission-review-text-title-data" style={{ color: "#B81F14" }}>
                This Submission is incomplete!
                Resume to start where you left off, or review your previous answers before resuming.
            </div>

            <button
                className={`normal-button-primary${context.isMobileString}`}
                onClick={() => {
                    // find the first unanswered question in ledger order
                    const nextQuestion = questionLedger.find(qDef => {
                        const value = currentSubmission[qDef.id];
                        return !value || value.trim() === "" || value === "No answer provided";
                    });

                    if (nextQuestion) {
                        context.SetLocalCurrentSubmissionId(currentSubmission.submissionId);
                        context.SetLocalCurrentSubmissionSelected(currentSubmission.submissionId);
                        context.stateSet_currentlySelectedSubmission(currentSubmission);

                        context.GoToDestination(nextQuestion.page);
                    } else {
                        // all questions answered → maybe send them to a review/complete page
                        console.log("All questions answered!");
                    }
                }}
            >
                Resume This Submission
            </button>
            <div className="submission-review-text-subtitle">Your Answers</div>
            <div style={{ height: "1px", width: "100%", backgroundColor: "#BFC8CA" }}></div>

            <Eddies_Custom_Carousel_Simple children={carouselChildren} />

            <button
                className={`normal-button-primary${context.isMobileString}`}
                onClick={() => {
                    // find the first unanswered question in ledger order
                    const nextQuestion = questionLedger.find(qDef => {
                        const value = currentSubmission[qDef.id];
                        return !value || value.trim() === "" || value === "No answer provided";
                    });

                    if (nextQuestion) {
                        //console.log("currentSubmission.submissionId FROM SUBMISSION REVIEW ACTUAL: ", currentSubmission.submissionId)
                        context.SetLocalCurrentSubmissionId(currentSubmission.submissionId);
                        context.SetLocalCurrentSubmissionSelected(currentSubmission.submissionId);
                        context.stateSet_currentlySelectedSubmission(currentSubmission);
                        context.GoToDestination(nextQuestion.page);
                    } else {
                        // all questions answered → maybe send them to a review/complete page
                        console.log("All questions answered!");
                    }
                }}
            >
                Resume This Submission
            </button>
        </div>)
}