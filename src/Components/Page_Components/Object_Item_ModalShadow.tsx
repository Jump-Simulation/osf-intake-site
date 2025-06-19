import { useEffect, useState } from "react"
import "../../CSS/Page_Component_Styles/Object_Item_ModalShadow.css";
import { BaseCarouselChildProps } from "../../BaseProps";

interface ModalShadow_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenShouldShowBool: boolean;
}



export default function Object_Item_ModalShadow(props: ModalShadow_Props) {

    useEffect(() => {
        console.log("props.givenShouldShowBool:" + props.givenShouldShowBool)


    }, [props.givenShouldShowBool])


    function RenderModalShadow() {
        if (props.givenShouldShowBool === true) {
            //console.log("WE SHOULD BE SEEING THE MODAL SHADOW!!!")
            return (<div className="modal-shadow"></div>)
        }
        else if (props.givenShouldShowBool === false) {
            //console.log("WE WERE DISABLED SOMEHOW!!")
            return (
                <></>
            )
        }
    }


    return (
        /*      <>  {RenderModalShadow()}</> */
        <>
            {props.givenShouldShowBool ? <div className="modal-shadow"></div> : null}
        </>


    )




}