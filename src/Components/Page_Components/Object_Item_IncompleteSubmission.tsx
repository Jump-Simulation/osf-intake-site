import { Timestamp } from "firebase/firestore";
import "../../CSS/Page_Component_Styles/Object_Item_IncompleteSubmission.css"
import { useAppContext } from "../../App";

interface Object_Item_IncompletedSubmission_Props {
    dateUpdated: Timestamp;

    q_idea_name: string;

    q_problem_solving: string;


}

export default function Object_Item_IncompletedSubmission(props: Object_Item_IncompletedSubmission_Props) {
    const context = useAppContext();
    return (<>


        <div
            className="incomplete-submission-parent"
        >
            <div className="incomplete-submission-name">{props.q_idea_name}</div>

            <div className="incomplete-submission-date">
                <div style={{ fontWeight: "bold" }}>Created:&nbsp;</div>
                {props.dateUpdated?.toDate().toLocaleDateString("en-US")}
            </div>
            <div className="incomplete-submission-problem"><div style={{ fontWeight: "bold" }}>Problem:&nbsp;</div> {props.q_problem_solving}</div>

            <div onClick={() => { context.ResumeSubmission(props.q_idea_name) }}
                className="incomplete-submission-button-resume">Resume</div>

        </div>





    </>)

}