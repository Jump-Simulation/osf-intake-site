import React from "react";
import { useAppContext } from "../../App";
import Object_Item_IncompleteSubmissionOverview from "./Object_Item_IncompleteSubmissionOverview";
import Object_Item_CompleteSubmissionOverview from "./Object_Item_CompleteSubmissionOverview";
import "../../CSS/Page_Component_Styles/Holder_Objects_SubmissionOverview.css"
import "../../CSS/Page_Component_Styles/Object_Item_Text.css"
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css"

interface Holder_Objects_SubmissionOverview_Props {
    // localCurrentSubmissions: Record<string, any>;
}

export default function Holder_Objects_SubmissionOverview(
    props: Holder_Objects_SubmissionOverview_Props
) {


    const context = useAppContext();


    const incomplete: Record<string, any> = {};
    const complete: Record<string, any> = {};

    // ✅ Separate submissions into incomplete vs complete
    Object.entries(context.localCurrentSubmissions).forEach(([id, submission]) => {
        const data = submission.submissionData || {};
        const hasEmptyField = Object.values(data).some(
            (val) => val === "" || val === null || val === undefined
        );

        if (hasEmptyField) {
            incomplete[id] = submission;
        } else {
            complete[id] = submission;
        }
    });

    // ✅ Date formatter
    const formatDate = (timestamp: any) => {
        try {
            if (!timestamp) return "Unknown date";

            // Firestore Timestamp objects
            if (timestamp.toDate) {
                return timestamp.toDate().toLocaleDateString("en-US");
            }

            // JS Date
            if (timestamp instanceof Date) {
                return timestamp.toLocaleDateString("en-US");
            }

            // Milliseconds
            if (typeof timestamp === "number") {
                return new Date(timestamp).toLocaleDateString("en-US");
            }

            return String(timestamp);
        } catch {
            return "Invalid date";
        }
    };

    // ✅ Helper to render a section
    const renderSectionIncomplete = (title: string, submissions: Record<string, any>) => (
        <div style={{ marginBottom: "2rem", textAlign: "start", width: "100%" }}>
            {Object.keys(submissions).length === 0 ? (
                null
            ) : (
                <div style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "15px"
                }}>
                    <h2 style={{ color: "#171D1E", fontSize: "24px", }}>{title}</h2>
                    {Object.entries(submissions).map(([id, submission]) => {
                        const data = submission.submissionData;
                        var subID: string = data.submissionId;
                        // console.log("SUB ID FOR COMPLETED ENTRY SHOULD BE: " + subID + " for MAP ID: " + id)
                        return (
                            <Object_Item_IncompleteSubmissionOverview
                                key={subID || "Unnamed" + id}
                                given_submissionTitle={data.q_idea_name || "Unnamed"}
                                given_submissionCreateDate={formatDate(data.dateCreated)}
                                given_submissionProblem={data.q_problem_solving || "No problem provided"}

                                given_submissionId={subID}

                            />

                        );
                    })}
                </div>
            )}
        </div>
    );
    // ✅ Helper to render a section
    const renderSectionComplete = (title: string, submissions: Record<string, any>) => (
        <div style={{ marginBottom: "2rem", textAlign: "start", width: "100%" }}>

            {Object.keys(submissions).length === 0 ? (
                null
            ) : (
                <div style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "15px"
                }}>
                    <h2 style={{ color: "#171D1E", fontSize: "24px", }}>{title}</h2>
                    {Object.entries(submissions).map(([id, submission]) => {
                        const data = submission.submissionData || {};
                        var subID: string = data.submissionId;
                        // console.log("SUB ID FOR COMPLETED ENTRY SHOULD BE: " + subID + " for MAP ID: " + id)
                        return (
                            <Object_Item_CompleteSubmissionOverview
                                key={subID || "Unnamed" + id}
                                given_submissionTitle={data.q_idea_name || "Unnamed"}
                                given_submissionSubmitDate={formatDate(data.dateUpdated)}
                                given_submissionId={subID}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );


    function renderSubmitNewSolution() {
        return (<div>    <div className={`textObject-h3${context.isMobileString}`} style={{

            color: "#171D1E",
            /* H3: Subheader */

            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "32px",
            letterSpacing: " 0.2px",


        }}>Submit a New Solution</div>
            <div className={`submit-new-solution${context.isMobileString}`}>

                <div>Have a new, innovative solution in healthcare? Tell us about it!</div>
                <button
                    onClick={() => { context.GoToDestination("page-sectionOneStart") }}
                    className={`normal-button-primary${context.isMobileString} submit-new-solution-button`
                    }

                >
                    Submit a New Solution
                </button>
            </div>

        </div>)
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