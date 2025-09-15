import "../../CSS/Page_Component_Styles/Object_Item_SubmissionReview_CarouselChild.css"


interface Object_Item_SubmissionReview_CarouselChild_Props {
    fieldName: string;
    value: string;
    questionText: string;
    isEditing?: boolean; // 👈 new prop
    onValueChange?: (newVal: string) => void; // 👈 new prop

}

export default function Object_Item_SubmissionReview_CarouselChild(props: Object_Item_SubmissionReview_CarouselChild_Props) {
    return (
        <div
            key={props.fieldName}
            className="submission-review-child-holder"
        >
            <div className="submission-review-child-question-title">
                {props.questionText}
            </div>

            <div className="submission-review-child-question-answer-holder">
                {props.isEditing ? (
                    <textarea
                        id="editingAnswer"
                        className="submission-review-child-question-answer"
                        value={props.value}
                        placeholder={props.value}
                        onChange={(e) => props.onValueChange?.(e.target.value)}
                        style={{
                            width: "100%",
                            minHeight: "300px",
                            backgroundColor: "transparent",
                            border: "none",
                            resize: "none",
                            outline: "none"
                        }}
                    />
                ) : (
                    <div className="submission-review-child-question-answer">
                        {props.value}
                    </div>
                )}
            </div>
        </div>
    );
}