
import { useAppContext } from "../../App"
import "../../CSS/Page_Component_Styles/Object_Item_SubmissionReviewActual.css"
import "../../CSS/Page_Component_Styles/Object_Item_Text.css"
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css"
import { SubmissionObject } from "../../types";
import Eddies_Custom_Carousel, { CarouselOrientation } from "../Eddies_Custom_Carousel";
import Eddies_Custom_Carousel_Redux from "../Eddies_Custom_Carousel_Redux";
import Object_Item_SubmissionReview_CarouselChild from "./Object_Item_SubmissionReview_CarouselChild";
import { ReactElement, useEffect, useState } from "react";
import Eddies_Custom_Carousel_Dots from "../Eddies_Custom_Carousel_Dots";
import Eddies_Custom_Carousel_Simple from "../Eddies_Custom_Carousel_Simple";

interface Object_SubmissionReview_Props {

}
var localCurrentCarouselIndex: number = 0;
var localPreviousCarouselIndex: number = -1;

export default function Object_Item_SubmissionReviewActual(props: Object_SubmissionReview_Props) {

    const context = useAppContext();

    var currentSubmission: SubmissionObject = context.localCurrentSubmissionSelected;


    const [currentCarouselIndex, hiddenSetCurrentCarouselIndex] = useState(0);

    const [carouselChildren, setCarouselChildren] = useState<ReactElement[]>([]);

    useEffect(() => {

        const qaEntries = Object.entries(context.state_currentlySelectedSubmission).filter(([key]) =>
            key.startsWith("q_")) as [string, string][];



        console.log("WE SAW A CHANGE IN THE STATE SUBMISSION, current submission is: ")
        console.log(context.state_currentlySelectedSubmission)
        if (qaEntries && qaEntries.length > 0) {
            const builtChildren = qaEntries.map(([fieldName, value], idx) => (

                <Object_Item_SubmissionReview_CarouselChild key={idx} fieldName={fieldName} value={value} />

            ));
            setCarouselChildren(builtChildren);
        }
    }, [context.state_currentlySelectedSubmission]);

    function SetCurrentCarouselIndex(givenNumber: number) {
        localCurrentCarouselIndex = givenNumber;
        hiddenSetCurrentCarouselIndex(givenNumber);
    }

    const [previousCarouselIndex, hiddenSetPreviousCarouselIndex] = useState(-1);
    function SetPreviousCarouselIndex(givenNumber: number) {
        localPreviousCarouselIndex = givenNumber;
        hiddenSetPreviousCarouselIndex(givenNumber);
    }











    return (<div className="submission-review-holder">

        <div className="submission-review-text-title">Submission Review</div>
        <div className="submission-review-text-title-data">Solution Name:</div>
        <div className="submission-review-text-data">{currentSubmission.q_idea_name || "Unnamed"}</div>
        <div className="submission-review-text-title-data">Submitted:</div>
        <div className="submission-review-text-data">{currentSubmission.dateUpdated.toDate().toLocaleDateString("en-US")}</div>

        <div className="submission-review-text-subtitle">Your Answers</div>
        <div style={{ height: "1px", width: "100%", backgroundColor: "#BFC8CA" }}></div>



        <Eddies_Custom_Carousel_Simple children={carouselChildren} />


    </div>)
}