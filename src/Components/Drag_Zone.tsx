import "../CSS/Page_Main_Styles.css"
import { useState, type CSSProperties, type FC, useRef, useEffect } from "react";
import { DragPreviewImage, useDrag, useDragLayer } from "react-dnd";


var tempInitialY: number = 0;
var tempInitialX: number = 0;

var deltaY: number = 0;
var deltaX: number = 0;

var mousePositionX: number = 0;
var mousePositionY: number = 0;

var isSwiping: boolean = false;

interface Drag_Zone_Props {
    givenStyle: string;
    children?: React.ReactNode;
    givenSwipeToNextPage(): void;
    givenSwipeToPreviousPage(): void;
    givenCurrentPageLocked: boolean;
    givenIsAtTop: boolean;
    givenIsAtBottom: boolean;
    isTopZone: boolean;
}

export default function Drag_Zone(props: Drag_Zone_Props) {


    var topPosition: string = "0";
    if (props.isTopZone === true) {
        topPosition = "0";
    }
    else if (props.isTopZone === false) {
        topPosition = "75%";
    }

    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });


    const handleMouseDown = (event: any) => {

        tempInitialY = event.clientY;
        tempInitialX = event.clientX;
        isSwiping = true;

    };

    const handleTouchStart = (event: any) => {

        tempInitialY = event.touches[0].clientY;
        tempInitialX = event.touches[0].clientX;
        isSwiping = true;
    };


    const handleMouseMove = (event: any) => {
        //setDebugText("MOUSE MOVE DETECTED");
        if (props.givenIsAtTop || props.givenIsAtBottom) {



            if (isSwiping) {
                deltaY = 0;
                deltaX = 0;
                //console.log("MOUSE MOVE DETECTED")
                //console.log("X and Y: " +   mousePosition.x + "||" +  mousePosition.y)
                setMousePosition({ x: event.clientX, y: event.clientY });
                mousePositionX = event.clientX;
                mousePositionY = event.clientY;


                deltaX = event.clientX - tempInitialX!;
                deltaY = event.clientY - tempInitialY!;


                var totalDistanceMoved = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                var distanceThreshold = 85;


                if ((totalDistanceMoved > distanceThreshold)) {
                    var deadzoneMouse: number = 10; //INCREASE THIS NUMBER FOR MORE LENIENCY, DECREASE IT FOR MORE STRICT DRAGGING

                    if (deltaX > deadzoneMouse || deltaX < -deadzoneMouse) {
                        console.log("WE DRAGGED LEFT AND RIGHT")
                        /*  canSwipe = false; */ //WE DRAGGED LEFT AND RIGHT



                    }
                    else if ((deltaY > 0) && (deltaX < deadzoneMouse || deltaX > -deadzoneMouse) && (totalDistanceMoved > distanceThreshold)) {

                        console.log("SHOULD BE A SUCCESSFUL DRAG DOWNWARD WITH MOUSE")
                        if (props.givenIsAtTop) {
                            props.givenSwipeToPreviousPage();
                        }
                        isSwiping = false;
                    }
                    else if (
                        (deltaY < 0) &&
                        (deltaX < deadzoneMouse || deltaX > -deadzoneMouse) && (totalDistanceMoved > distanceThreshold)
                    ) {
                        //WE'RE DRAGGING THE CARD UP

                        if (props.givenIsAtBottom) {
                            if (!props.givenCurrentPageLocked) {
                                console.log("SHOULD BE A SUCCESSFUL DRAG UPWARD WITH MOUSE")
                                props.givenSwipeToNextPage();
                            }
                            else {
                                console.log("drag upwards with mouse was attempted, but page was locked!")
                            }
                        }


                        isSwiping = false;

                    }
                }
            }

        }


    };
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const handleTouchMove = (event: any) => {
        //setDebugText("MOUSE MOVE DETECTED");
        //console.log("Handle Touch MOVE DETECTED")

        if (props.givenIsAtTop || props.givenIsAtBottom) {



            if (isSwiping) {
                deltaY = 0;
                deltaX = 0;
                deltaY = event.touches[0].clientY - tempInitialY!;
                deltaX = event.touches[0].clientX - tempInitialX!;

                setMousePosition({ x: event.touches[0].clientX, y: event.touches[0].clientY });

                var totalDistanceMoved = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                /*   console.log("totalDistanceMoved"+totalDistanceMoved); */
                var distanceThreshold = 75;


                var deadzoneTouch: number = 15; //INCREASE THIS NUMBER FOR MORE LENIENCY, DECREASE IT FOR MORE STRICT DRAGGING
                if (deltaX > deadzoneTouch || deltaX < -deadzoneTouch) {

                    console.log("HORIZONTAL TOUCH DRAG DETECTED!!");
                }
                else if (deltaY > 0 && (deltaX < deadzoneTouch || deltaX > -deadzoneTouch) && (totalDistanceMoved > distanceThreshold)) { //DRAG DOWN IF


                    console.log("SHOULD BE A SUCCESSFUL TOUCH DRAG DOWNWARD")
                    if (props.givenIsAtTop) {
                        props.givenSwipeToPreviousPage();
                    }

                    isSwiping = false;
                }
                else if (deltaY < 0 && (deltaX < deadzoneTouch || deltaX > -deadzoneTouch) && (totalDistanceMoved > distanceThreshold)) { //DRAG UP IF
                    //WE'RE DRAGGING THE CARD UP (ish)

                    if (props.givenIsAtBottom) {
                        if (!props.givenCurrentPageLocked) {
                            console.log("UP TOUCH DRAG DETECTED!!");
                            props.givenSwipeToNextPage();
                        }
                        else {
                            console.log("drag upwards with touch was attempted, but page was locked!")
                        }
                    }


                    isSwiping = false;
                };

            }

        }


    }



    const handleMouseUp = () => {
        isSwiping = false;
    };

    const handleTouchEnd = () => {
        isSwiping = false;
    };

    function sendMessage() {
        console.log("scrolling detected on Drag Parent!!")
    }


    return (
        <div

            style={{
                background: "red",
                height: "25cqh", width: "100cqw", position: "absolute", top: topPosition,
                opacity: "25%", /* pointerEvents: "none", */
                zIndex: "1"
            }}


            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}


        >

        </div >
    );


}