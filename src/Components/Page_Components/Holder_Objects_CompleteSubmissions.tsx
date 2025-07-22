import { useAppContext } from "../../App";
import { BaseCarouselChildProps } from "../../BaseProps";
import { SubmissionData } from "../../types";
import Object_Item_CompletedSubmission from "./Object_Item_CompletedSubmission";


interface Holder_Objects_CompleteSubmissions_Props extends BaseCarouselChildProps {

    given_state_Array_CompleteSubmissions: SubmissionData[];

}



export default function Holder_Objects_CompleteSubmissions(props:
    Holder_Objects_CompleteSubmissions_Props) {

    const context = useAppContext();
    function RenderHolder() {

        props.given_state_Array_CompleteSubmissions.map((submission, index) => {


            console.log("Rendering submission:", submission["q-idea_name"]);

            const submissionProps = {
                key: index,
                ...submission,
            };

            return (

                <Object_Item_CompletedSubmission {...submissionProps} />

            );
        })


    }

    return (

        <>
            {RenderHolder()}
        </>

    )

}