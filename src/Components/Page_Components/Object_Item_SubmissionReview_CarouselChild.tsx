import "../../CSS/Page_Component_Styles/Object_Item_SubmissionReview_CarouselChild.css"


interface Object_Item_SubmissionReview_CarouselChild_Props {
    fieldName: string;
    value: string;
}

export default function Object_Item_SubmissionReview_CarouselChild({ fieldName, value }: Object_Item_SubmissionReview_CarouselChild_Props) {
    return (
        <div className="qa-item">
            <div className="qa-item-question">{fieldName.replace("q_", "").replace(/_/g, " ")}</div>
            <div className="qa-item-answer">{value || "(no answer provided)"}</div>
        </div>
    );
}