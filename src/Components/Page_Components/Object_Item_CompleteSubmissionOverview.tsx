
import "../../CSS/Page_Component_Styles/Object_Item_CompleteSubmissionOverview.css"

import { useAppContext } from "../../App";
import "../../CSS/Page_Component_Styles/Object_Item_Text.css"
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css"

interface Object_Item_CompleteSubmissionOverview_Props {


    given_submissionTitle: string;
    given_submissionSubmitDate: string;
    given_submissionId: string;
}

export default function Object_Item_CompleteSubmissionOverview(props: Object_Item_CompleteSubmissionOverview_Props) {

    const context = useAppContext();

    return (<>

        <div
            key={props.given_submissionTitle}
            className={`submission-complete-card${context.isMobileString}`}
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
                }}>Submitted: </strong>
                {props.given_submissionSubmitDate}
            </div>
            <button
                onClick={() => { }}
                className={`normal-button-secondary${context.isMobileString}`
                }

            >
                Review
            </button>

        </div >

    </>)
}