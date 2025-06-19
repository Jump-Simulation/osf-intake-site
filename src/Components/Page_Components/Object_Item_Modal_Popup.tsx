import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import ReactSlidingPane from "react-sliding-pane";

import "../../CSS/Page_Component_Styles/Object_Item_Modal_Popup.css";
import { BaseCarouselChildProps } from "../../BaseProps";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export interface Object_Item_Modal_Popup_Props extends BaseCarouselChildProps {


    givenKey: string;

    givenModalItems: React.ReactNode;

    givenModalID: string;

    givenSetCurrentModal(givenModalID: string): void;


    givenPageIndex: number;

    givenSetModalShadowState(givenBool: boolean, givenOrigin: string): void;

    givenTagInclusion: string;
    givenTagExclusion: string;

    givenDismissEnabled: boolean;
    givenDismissTimer: number; //in miliseconds
    givenDismissDestination: string;
    givenGoToDestination(givenString: string): void;



    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;
}


export default function Object_Item_Modal_Popup(props: Object_Item_Modal_Popup_Props) {



    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(props.givenTagInclusion, props.givenTagExclusion, "modalID" + props.givenModalID, "modal popup", props.givenGlobal_ShouldExcludeByDefault));

    }, [props.givenGlobal_TagsTrueArray, props.givenGlobal_TagsFalseArray])


    const [isActivated, setIsActivated] = useState(false);



    useEffect(() => {


        if (props.givenGlobal_CurrentCarouselIndex === props.givenPageIndex) {
            if (props.givenGlobal_CurrentModalID === props.givenModalID) {
                setIsActivated(true);
                props.givenSetModalShadowState(true, "modal popup at ID: " + props.givenModalID);
                if (props.givenDismissEnabled === true) {
                    var repeatableInt: number = 1;
                    if (repeatableInt > 0) {
                        const timer = setTimeout(() => {
                            repeatableInt -= 1;
                            setIsActivated(false);
                            props.givenGoToDestination(props.givenDismissDestination);
                        }, props.givenDismissTimer);
                    }
                }

            }
            else {
                setIsActivated(false);

            }
        }
        else {
            setIsActivated(false);
        }


    }, [props.givenGlobal_CurrentModalID])




    function RenderModal() {

        if (isActivated) {
            return (
                <div
                    data-givenkey={props.givenKey}
                    className={`modal-container-popup${props.givenGlobal_isMobile}`}
                    onClick={() => {
                        props.givenSetCurrentModal("null");

                    }}>
                    <div
                        className={`modal-popup${props.givenGlobal_isMobile}`}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}

                    >
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