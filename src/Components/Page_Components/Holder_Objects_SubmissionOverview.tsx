import React from "react";
import { useAppContext } from "../../App";
import Object_Item_IncompleteSubmissionOverview from "./Object_Item_IncompleteSubmissionOverview";
import Object_Item_CompleteSubmissionOverview from "./Object_Item_CompleteSubmissionOverview";
import "../../CSS/Page_Component_Styles/Holder_Objects_SubmissionOverview.css"
import "../../CSS/Page_Component_Styles/Object_Item_Text.css"
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css"
import { SubmissionObject } from "../../types";

interface Holder_Objects_SubmissionOverview_Props {
    // localCurrentSubmissions: Record<string, any>;
}

export default function Holder_Objects_SubmissionOverview(
    props: Holder_Objects_SubmissionOverview_Props
) {
    const context = useAppContext();

    // -------------------------
    // 1️⃣ Separate submissions into incomplete vs complete
    // -------------------------
    const incomplete: Record<string, SubmissionObject> = {};
    const complete: Record<string, SubmissionObject> = {};

    Object.entries(context.localCurrentSubmissions).forEach(([id, submission]) => {
        // Check if any of the question fields (q_*) are empty
        const questionValues = Object.entries(submission)
            .filter(([key]) => key.startsWith("q_"))
            .map(([, value]) => value);

        const hasEmptyField = questionValues.some(val => typeof val !== "string" || val.trim() === "");

        if (hasEmptyField) {
            incomplete[id] = submission;
        } else {
            complete[id] = submission;
        }
    });

    // -------------------------
    // 2️⃣ Date formatter helper
    // -------------------------
    const formatDate = (timestamp: any) => {


        if (!timestamp) return "Unknown date";
        if (timestamp.toDate) return timestamp.toDate().toLocaleDateString("en-US");
        if (timestamp instanceof Date) return timestamp.toLocaleDateString("en-US");
        if (typeof timestamp === "number") return new Date(timestamp).toLocaleDateString("en-US");
        return String(timestamp);
    };

    // -------------------------
    // 3️⃣ Render helpers
    // -------------------------
    const renderSectionIncomplete = (title: string, submissions: Record<string, SubmissionObject>) => (
        <div style={{ marginBottom: "2rem", textAlign: "start", width: "100%" }}>
            {Object.keys(submissions).length === 0 ? null : (
                <div style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "15px"
                }}>
                    <h2 style={{ color: "#171D1E", fontSize: "24px" }}>{title}</h2>
                    {Object.entries(submissions).map(([id, submission]) => (
                        <Object_Item_IncompleteSubmissionOverview
                            key={submission.submissionId || "Unnamed" + id}
                            given_submissionTitle={submission.q_idea_name || "Unnamed"}
                            given_submissionCreateDate={formatDate(submission.dateCreated)}
                            given_submissionProblem={submission.q_problem_solving || "No problem provided"}
                            given_submissionId={submission.submissionId}
                        />
                    ))}
                </div>
            )}
        </div>
    );

    const renderSectionComplete = (title: string, submissions: Record<string, SubmissionObject>) => (
        <div style={{ marginBottom: "2rem", textAlign: "start", width: "100%" }}>
            {Object.keys(submissions).length === 0 ? null : (
                <div style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "15px"
                }}>
                    <h2 style={{ color: "#171D1E", fontSize: "24px" }}>{title}</h2>
                    {Object.entries(submissions).map(([id, submission]) => (
                        <Object_Item_CompleteSubmissionOverview
                            key={submission.submissionId || "Unnamed" + id}
                            given_submissionTitle={submission.q_idea_name || "Unnamed"}
                            given_submissionSubmitDate={formatDate(submission.dateUpdated)}
                            given_submissionId={submission.submissionId}
                        />
                    ))}
                </div>
            )}
        </div>
    );

    // -------------------------
    // 4️⃣ Render "Submit New Solution" helper
    // -------------------------
    function renderSubmitNewSolution() {
        return (
            <div>
                <div className={`textObject-h3${context.isMobileString}`} style={{
                    color: "#171D1E",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "32px",
                    letterSpacing: "0.2px",
                }}>
                    Submit a New Solution
                </div>
                <div className={`submit-new-solution${context.isMobileString}`}>
                    <div>Have a new, innovative solution in healthcare? Tell us about it!</div>
                    <button
                        onClick={() => { context.GoToDestination("page-sectionOneStart") }}
                        className={`normal-button-primary${context.isMobileString} submit-new-solution-button`}
                    >
                        Submit a New Solution
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            padding: "1rem", textAlign: "start",
            display: "flex", justifyContent: "start", alignItems: "start",
            flexDirection: "column",
            gap: "30px"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: "column"
            }}>

                <div className={`textObject-h1${context.isMobileString}`}>Greetings, Inventor</div>
                <div className={`textObject-bodyText${context.isMobileString}`}>Take a look at one of your past ideas, complete a work in progress, or submit a brand new solution.</div>

            </div>

            {renderSectionIncomplete("Incomplete Submissions", incomplete)}

            {renderSubmitNewSolution()}

            {renderSectionComplete("Completed Submissions", complete)}
        </div >
    );
}