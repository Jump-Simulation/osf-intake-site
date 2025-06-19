import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import ReactSlidingPane from "react-sliding-pane";

import "../../CSS/Page_Component_Styles/Object_Item_Modal_Alert.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import { BaseCarouselChildProps } from "../../BaseProps";



export interface Object_Item_Modal_Alert_Props extends BaseCarouselChildProps {

    givenModalItems: React.ReactNode;

    givenModalID: string;

    givenSetCurrentModal(givenModalID: string): void;


    givenPageIndex: number;

    givenAlertRepeatableBoolean: boolean;
    givenAlertDelayTime: number;


    givenSetModalShadowState(givenBool: boolean, givenOrigin: string): void;

    givenTagInclusion: string;
    givenTagExclusion: string;

    givenKey: string;

    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;
}

var repeatableInt: number = 1;

export default function Object_Item_Modal_Alert(props: Object_Item_Modal_Alert_Props) {

    const [shouldRender, setShouldRender] = useState(true);
    const [isActivated, setIsActivated] = useState(false);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(props.givenTagInclusion,
            props.givenTagExclusion, "modalID" + props.givenModalID, "modal alert", props.givenGlobal_ShouldExcludeByDefault));
    }, [props.givenGlobal_TagsTrueArray, props.givenGlobal_TagsFalseArray])




    useEffect(() => {

        if (props.givenAlertRepeatableBoolean === true ||
            (props.givenAlertRepeatableBoolean === false && repeatableInt >= 1)) {
            if (props.givenGlobal_CurrentCarouselIndex === props.givenPageIndex) {
                const timer = setTimeout(() => {
                    repeatableInt -= 1;
                    setIsActivated(true);
                    props.givenSetCurrentModal(props.givenModalID)
                    props.givenSetModalShadowState(true, "modal alert at ID: " + props.givenModalID);
                }, 500);
            }
            else {
                setIsActivated(false);
            }
        }
        else {
            setIsActivated(false);
        }
    }, [props.givenGlobal_CurrentCarouselIndex])


    useEffect(() => {

        if (props.givenGlobal_CurrentModalID !== props.givenModalID) {
            setIsActivated(false);
        }

    }, [props.givenGlobal_CurrentModalID])





    function RenderModal() {

        if (isActivated) {
            return (


                <div data-givenkey={props.givenKey} className={`modal-container-alert${props.givenGlobal_isMobile}`} onClick={() => { props.givenSetCurrentModal("none"); }}>
                    <div
                        className={`modal-alert${props.givenGlobal_isMobile}`} onClick={(e) => {
                            e.stopPropagation();
                        }}>

                        {props.givenModalItems}

                        <div className={`modal-x-mark-parent${props.givenGlobal_isMobile}`} onClick={() => {
                            setIsActivated(false),
                                props.givenSetCurrentModal("none");
                        }}> <FontAwesomeIcon
                                icon={faXmark as IconProp}
                                className={`modal-x-mark${props.givenGlobal_isMobile}`}
                            /></div>

                    </div>



                </div>


            );
        }
        else {
            return (
                <>
                </>
            )
        }




    }

    if (shouldRender) {
        return (RenderModal())
    }
    else { return (<></>) }





}