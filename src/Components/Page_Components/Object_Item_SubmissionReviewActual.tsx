import { useAppContext } from "../../App";
import "../../CSS/Page_Component_Styles/Object_Item_SubmissionReviewActual.css";
import "../../CSS/Page_Component_Styles/Object_Item_Text.css";
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css";
import { SubmissionObject } from "../../types";
import Object_Item_SubmissionReview_CarouselChild from "./Object_Item_SubmissionReview_CarouselChild";
import { useEffect, useState } from "react";
import Eddies_Custom_Carousel_Simple from "../Eddies_Custom_Carousel_Simple";

interface Object_SubmissionReview_Props { }

export default function Object_Item_SubmissionReviewActual(
    props: Object_SubmissionReview_Props
) {
    const context = useAppContext();
    const questionLedger = context.questionLedger;
    const currentSubmission: SubmissionObject =
        context.localCurrentSubmissionSelected;

    const [state_questionsAnswered, stateSet_questionsAnswered] = useState(0);

    // Editing state
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [editValue, setEditValue] = useState("");

    // Count answered questions whenever submission changes
    useEffect(() => {
        const answeredCount = questionLedger.filter((qDef) => {
            const val = currentSubmission[qDef.id];
            return typeof val === "string" && val.trim() !== "";
        }).length;
        stateSet_questionsAnswered(answeredCount);
    }, [context.state_currentlySelectedSubmission]);

    // Save edited value
    const handleSaveEdit = () => {
        const qDef = questionLedger[currentIndex];
        if (!qDef) return;

        var questionIdActual = qDef.id.split("q_")[1];

        currentSubmission[qDef.id] = editValue;
        context.SetLocalCurrentSubmissionSelected(currentSubmission.submissionId);
        context.SetLocalCurrentSubmissionId(currentSubmission.submissionId);
        setIsEditing(false);
        console.log("EDITING ANSWER: QID: " + questionIdActual + " || ANSWER VALUE: " + editValue)
        context.WriteSubmissionToFirestore(questionIdActual, editValue)
    };

    // Build carousel children dynamically each render
    const carouselChildren = questionLedger.map((qDef, index) => {
        const value =
            index === currentIndex && isEditing
                ? editValue
                : (currentSubmission[qDef.id] as string) || "No answer provided";

        return (
            <Object_Item_SubmissionReview_CarouselChild
                key={qDef.id}
                fieldName={qDef.id}
                questionText={qDef.text}
                value={value}
                isEditing={isEditing && index === currentIndex}
                onValueChange={(newVal) => setEditValue(newVal)}
            />
        );
    });

    return (
        <div className="submission-review-holder">
            <div className="submission-review-text-title">Submission Review</div>
            <div className="submission-review-text-title-data">Solution Name:</div>
            <div className="submission-review-text-data">
                {currentSubmission.q_idea_name || "Unnamed"}
            </div>
            <div className="submission-review-text-title-data">Started:</div>
            <div className="submission-review-text-data">
                {currentSubmission.dateCreated
                    .toDate()
                    .toLocaleDateString("en-US")}
            </div>
            <div className="submission-review-text-title-data">Questions Answered:</div>
            <div className="submission-review-text-data">
                {state_questionsAnswered} / {carouselChildren.length}
            </div>

            <div className="submission-review-text-title-data" style={{ color: "#B81F14" }}>
                This Submission is incomplete! Resume to start where you left off, or review your previous answers before resuming.
            </div>

            {/* Carousel */}
            <Eddies_Custom_Carousel_Simple
                children={carouselChildren}
                onIndexChange={(idx) => setCurrentIndex(idx)} // <-- track active slide
            />

            {/* Edit Button */}
            {!isEditing ? (
                <button
                    className={`normal-button-secondary${context.isMobileString}`}
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => {
                        const qDef = questionLedger[currentIndex];
                        if (qDef) {
                            setEditValue(currentSubmission[qDef.id] || "");
                            setIsEditing(true);
                        }
                    }}
                >
                    Edit
                </button>
            ) : (
                <div style={{ marginBottom: "15px", display: "flex", gap: "15px", width: "100%" }}>

                    <button
                        className={`normal-button-tertiary${context.isMobileString}`}
                        style={{ width: "100%", color: "#00677E" }}
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className={`normal-button-secondary${context.isMobileString}`}
                        style={{ width: "100%", backgroundColor: "transparent" }}
                        onClick={handleSaveEdit}
                    >
                        Save
                    </button>
                </div>
            )}


            <button
                className={`normal-button-primary${context.isMobileString}`}
                onClick={() => {
                    const nextQuestion = questionLedger.find((qDef) => {
                        const value = currentSubmission[qDef.id];
                        return !value || value.trim() === "" || value === "No answer provided";
                    });
                    if (nextQuestion) {
                        context.SetLocalCurrentSubmissionId(currentSubmission.submissionId);
                        context.SetLocalCurrentSubmissionSelected(currentSubmission.submissionId);
                        context.stateSet_currentlySelectedSubmission(currentSubmission);
                        context.GoToDestination(nextQuestion.page);
                    } else {
                        console.log("All questions answered!");
                    }
                }}
            >
                Resume This Submission
            </button>

            {/* Back to Dashboard */}
            <button
                className={`normal-button-tertiary${context.isMobileString}`}
                onClick={() => context.GoToDestination("page-previous")}
                style={{ marginBottom: "25px", color: "#00677E" }}
            >
                Back to Dashboard
            </button>

            <br />
            <div style={{ width: "100dvw", minHeight: "15px" }}></div>






        </div>
    );
}