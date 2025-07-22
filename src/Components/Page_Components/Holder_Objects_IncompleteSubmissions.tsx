import { useEffect, useState } from "react";
import { SubmissionData } from "../../types";

import Object_Item_IncompletedSubmission from "./Object_Item_IncompleteSubmission";
import { BaseCarouselChildProps } from "../../BaseProps";
import { useAppContext } from "../../App";
import "../../CSS/Page_Component_Styles/Holder_Objects_IncompleteSubmissions.css"



interface Holder_Objects_IncompleteSubmissions_Props extends BaseCarouselChildProps {

    given_state_Array_IncompleteSubmissions: SubmissionData[];

}



export default function Holder_Objects_IncompleteSubmissions(props: Holder_Objects_IncompleteSubmissions_Props) {


    const context = useAppContext();

    const [tempSubmissions, setTempSubmissions] = useState<SubmissionData[]>([])

    // console.log("props.given_state_Array_IncompleteSubmissions:" + props.given_state_Array_IncompleteSubmissions)
    useEffect(() => {
        console.log("WE SHOULD SEE A CHANGE HERE!!")
        console.log(context.state_IncompleteSubmissions)

        setTempSubmissions([...context.state_IncompleteSubmissions])

    }, [context.state_IncompleteSubmissions])

    function RenderHolder() {
        if (tempSubmissions.length === 0) {
            return <p>Nothing here</p>;
        }

        return (
            <div className="incomplete-submissions-holder">
                {tempSubmissions.map((submission, index) => {
                    // console.log("Rendering submission:", submission["q-idea_name"]);
                    return (
                        <Object_Item_IncompletedSubmission
                            key={index}
                            dateUpdated={submission.dateUpdated}
                            q_idea_name={submission["q-idea_name"]}
                            q_problem_solving={submission["q-problem_solving"]}
                        />
                    );
                })}
            </div>
        );
    }

    return (

        <>
            {RenderHolder()}
        </>

    )

}