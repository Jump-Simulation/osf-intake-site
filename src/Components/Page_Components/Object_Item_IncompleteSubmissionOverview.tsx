import "../../CSS/Page_Component_Styles/Object_Item_Text.css"

import "../../CSS/Page_Component_Styles/Object_Item_IncompleteSubmissionOverview.css"
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css"

import { useAppContext } from "../../App";


interface Object_Item_IncompleteSubmissionOverview_Props {


    given_submissionTitle: string;
    given_submissionCreateDate: string;
    given_submissionProblem: string;
    given_submissionId: string;


}

export default function Object_Item_IncompleteSubmissionOverview(props: Object_Item_IncompleteSubmissionOverview_Props) {

    const context = useAppContext();

    function ResumeSubmission() {

        context.SetLocalCurrentSubmissionSelected(props.given_submissionId);

        context.GoToDestination("page-submission-review");


    }

    return (



        <div
            key={props.given_submissionTitle}
            className={`submission-incomplete-card${context.isMobileString}`}
        >
            <div className={`textObject-h4${context.isMobileString}`} style={{ color: "#00677E" }}>
                {props.given_submissionTitle || "Untitled Submission"}
            </div>
            <div>
                <strong style={{

                    color: "var(--color-on-surface-default, #171D1E)",
                    fontFamily: "var(--font-family-body, Avenir)",
                    fontSize: "var(--font-size-body-default, 16px)",
                    fontStyle: "normal",
                    fontWeight: "var(--font-weight-body-default, 800)",
                    lineHeight: "var(--font-line-height-body-default, 24px)",
                    letterSpacing: "var(--font-letter-spacing-default, 0.2px)"
                }}>Created: </strong>
                {props.given_submissionCreateDate}
            </div>
            <div>
                <strong>Problem: </strong>
                {props.given_submissionProblem}
            </div>

            <button
                onClick={() => { ResumeSubmission(); }}
                className={`normal-button-primary${context.isMobileString}`
                }

            >
                Resume
            </button>
        </div >


    )
}