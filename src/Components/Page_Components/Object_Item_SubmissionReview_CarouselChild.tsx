import "../../CSS/Page_Component_Styles/Object_Item_SubmissionReview_CarouselChild.css"


interface Object_Item_SubmissionReview_CarouselChild_Props {
    fieldName: string;
    value: string;
    questionText: string;
}

export default function Object_Item_SubmissionReview_CarouselChild(props: Object_Item_SubmissionReview_CarouselChild_Props) {
    return (
        <div
            key={props.fieldName}
            className="submission-review-child-holder">
            <div className="submission-review-child-question-title">{props.questionText}</div>

            <div className="submission-review-child-question-answer-holder">

                <div className="submission-review-child-question-answer">{props.value}</div>

            </div>

        </div>
    );
}