import React, { createContext, useContext } from "react";
import "../CSS/Animations_Carousel_Vertical.css"
import "../CSS/Styles_Eddies_Carousel.css";
import { BaseCarouselChildProps } from "../BaseProps";

import { useEffect, useRef, useState } from "react";

var LockNumberContext = createContext<number>(0);

export const useLockNumber = () => {
    const context = useContext(LockNumberContext);
    if (context === undefined) {
        throw new Error('useLockNumber must be used within a LockNumberProvider');
    }
    return context;
};

export interface Eddies_Custom_Carousel_Item_Props extends BaseCarouselChildProps {



    isMobile: string;

    givenPageID: string;


    givenCarouselChild: React.ReactElement<BaseCarouselChildProps>[];
    givenCarouselOrientation: string;

    //carousel props
    givenIndex: number;
    givenCurrentIndex: number

    givenPreviousIndex: number;

    givenLockNumber: number;

    givenIsAtTop: boolean;
    givenIsAtBottom: boolean;
    givenSetIsAtTop(givenBool: boolean): void;
    givenSetIsAtBottom(givenBool: boolean): void;

    givenSetIsCurrentlyOverflowing(givenBool: boolean): void;


    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string, givenObjectName?: string): boolean;

    givenTagInclusion: string;
    givenTagExclusion: string;
}

export default function Eddies_Custom_Carousel_Item(props: Eddies_Custom_Carousel_Item_Props) {



    useEffect(() => {
        if (props.givenIndex === props.givenGlobal_CurrentCarouselIndex) {
            if (scrollContainerRef.current) {
                var container = scrollContainerRef.current;

                // Check for overflow (both horizontal and vertical)
                if (container.scrollHeight > container.clientHeight) {
                    /*    console.log("screen IS currently overflowing!!!") */
                    props.givenSetIsCurrentlyOverflowing(true);
                }
                else {
                    /*   console.log("screen NOT currently overflowing!!!") */
                    props.givenSetIsCurrentlyOverflowing(false);
                }
            }

        }

    }, [, props.givenGlobal_CurrentCarouselIndex]); // Empty dependency array to run this check on component mount


    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        const scrollContainer = scrollContainerRef.current || document.documentElement || document.body;
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;

        if (scrollTop === 0) {
            props.givenSetIsAtTop(true);
            /*       console.log("scroll TOP = TRUE!"); */
        } else {
            props.givenSetIsAtTop(false);
            /*   console.log("scroll TOP = FALSE!"); */
        }

        if (scrollTop + clientHeight >= scrollHeight - 1) {
            props.givenSetIsAtBottom(true);
            /*    console.log("scroll BOTTOM = TRUE"); */
            props.givenSetIsCurrentlyOverflowing(false);
        } else {
            props.givenSetIsAtBottom(false);
            /*     console.log("scroll BOTTOM = FALSE"); */
            props.givenSetIsCurrentlyOverflowing(true);

        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current || window;
        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [props.givenIsAtTop, props.givenIsAtBottom, props.givenGlobal_CurrentCarouselIndex]);





    function sendMessage() {

    }




    const [animationToggleState, setAnimationToggleState] = useState("idle");

    var animationSpeed: string = "0.5s";

    useEffect(() => { //the use effect that dictates which animation is played

        // Check if the givenIndex matches the givenGlobal_CurrentCarouselIndex
        if (props.givenIndex === props.givenGlobal_CurrentCarouselIndex) {
            if (props.givenCarouselOrientation == "horizontal") {
                if (props.givenGlobal_CurrentCarouselIndex > props.givenGlobal_PreviousCarouselIndex) { //going left to right, forward
                    setAnimationToggleState("AnimateFromRightToCenter");
                    /*          console.log("Animation State has been set to AnimateFromRightToCenter!! on item index: " + props.givenIndex) */
                }
                else if (props.givenGlobal_CurrentCarouselIndex < props.givenGlobal_PreviousCarouselIndex) { //going right to left, backwards
                    setAnimationToggleState("AnimateFromLeftToCenter");
                    /*          console.log("Animation State has been set to AnimateFromLeftToCenter!! on item index: " + props.givenIndex) */
                }

            }
            else if (props.givenCarouselOrientation == "vertical") {

                if (props.givenGlobal_CurrentCarouselIndex > props.givenGlobal_PreviousCarouselIndex) { //going top to bottom, forward
                    setAnimationToggleState("AnimateFromBottomToCenter");
                    /*          console.log("Animation State has been set to AnimateFromBottomToCenter!! on item index: " + props.givenIndex) */
                }
                else if (props.givenGlobal_CurrentCarouselIndex < props.givenGlobal_PreviousCarouselIndex) { //going bottom to top, backwards
                    setAnimationToggleState("AnimateFromTopToCenter");
                    /*         console.log("Animation State has been set to AnimateFromTopToCenter!! on item index: " + props.givenIndex) */
                }
            }
            else {
                console.log("INCORRECT ANIMATION STATE on item index: " + props.givenIndex)
            }

        } else if (props.givenIndex === props.givenGlobal_PreviousCarouselIndex) {
            if (props.givenCarouselOrientation == "horizontal") {
                if (props.givenGlobal_CurrentCarouselIndex > props.givenGlobal_PreviousCarouselIndex) {
                    setAnimationToggleState("AnimateFromCenterToLeft");
                    /*        console.log("Animation State has been set to AnimateFromCenterToLeft!! on item index: " + props.givenIndex) */
                }
                else if (props.givenGlobal_CurrentCarouselIndex < props.givenGlobal_PreviousCarouselIndex) { //going right to left, backwards
                    setAnimationToggleState("AnimateFromCenterToRight");
                    /*        console.log("Animation State has been set to AnimateFromCenterToRight!! on item index: " + props.givenIndex) */
                }
            }
            else if (props.givenCarouselOrientation == "vertical") {

                if (props.givenGlobal_CurrentCarouselIndex > props.givenGlobal_PreviousCarouselIndex) { //going top to bottom, forward
                    setAnimationToggleState("AnimateFromCenterToTop");
                    /*  console.log("Animation State has been set to AnimateFromCenterToTop!! on item index: " + props.givenIndex) */
                }
                else if (props.givenGlobal_CurrentCarouselIndex < props.givenGlobal_PreviousCarouselIndex) { //going bottom to top, backwards
                    setAnimationToggleState("AnimateFromCenterToBottom");
                    /*      console.log("Animation State has been set to AnimateFromCenterToBottom!! on item index: " + props.givenIndex) */
                }
            }
            else {
                console.log("INCORRECT ANIMATION STATE on item index: " + props.givenIndex)
            }
        }

        else if (props.givenIndex !== props.givenGlobal_CurrentCarouselIndex && props.givenGlobal_CurrentCarouselIndex !== 0) {//this is bugged when going back to 1 st page

            setAnimationToggleState("AnimateHidden");
            /*   console.log("Animation State has been set to AnimateHidden on item index: " + props.givenIndex) */

        }




    }, [props.givenGlobal_CurrentCarouselIndex]);



    useEffect(() => {
        const handleScroll = () => {
            // console.log("scrolling detected ON CAROUSEL ITEM!!");
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    function SetAnimationStateIdle() {
        setAnimationToggleState("AnimateIdle");
    }

    function SetAnimationStateHidden() {
        setAnimationToggleState("AnimateHidden");
        /*        props.givenCarouselSetIsAnimatingBool(false) */
    }



    //arrival functions, horizontal
    function renderAnimationRightToCenter() {

        return (
            <div
                ref={scrollContainerRef}
                onScroll={sendMessage}
                onAnimationEnd={SetAnimationStateIdle}
                className={`childRow carousel-page${props.isMobile}`}
                style={{
                    animationName: "AnimationRightToCenter",
                    animationDuration: animationSpeed,
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "1",
                    animationDirection: "normal",
                    animationFillMode: "forwards",



                }}

                data-animationstate={animationToggleState}
            >
                {/*            {props.givenCarouselChild} */}
                {renderCarouselChild()}
            </div>

        )
    }

    function renderAnimationLeftToCenter() {

        return (
            <div
                className={`childRow carousel-page${props.isMobile}`}
                onAnimationEnd={SetAnimationStateIdle}
                style={{
                    animationName: "AnimationLeftToCenter",
                    animationDuration: animationSpeed,
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "1",
                    animationDirection: "normal",
                    animationFillMode: "forwards",


                }}
                data-animationstate={animationToggleState}
            >
                {/*    {props.givenCarouselChild} */}
                {renderCarouselChild()}

            </div>

        )
    }

    //arrival functions, vertical
    function renderAnimationBottomToCenter() {

        return (
            <div
                ref={scrollContainerRef}
                onScroll={sendMessage}
                className={`childRow carousel-page${props.isMobile}`}
                onAnimationEnd={SetAnimationStateIdle}
                style={{
                    animationName: "AnimationBottomToCenter",
                    animationDuration: animationSpeed,
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "1",
                    animationDirection: "normal",
                    animationFillMode: "forwards",


                }}
                data-animationstate={animationToggleState}
            >
                {/*      {props.givenCarouselChild} */}
                {renderCarouselChild()}

            </div>

        )
    }
    function renderAnimationTopToCenter() {

        return (
            <div
                ref={scrollContainerRef}
                onScroll={sendMessage}
                className={`childRow carousel-page${props.isMobile}`}
                onAnimationEnd={SetAnimationStateIdle}
                style={{
                    animationName: "AnimationTopToCenter",
                    animationDuration: animationSpeed,
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "1",
                    animationDirection: "normal",
                    animationFillMode: "forwards",



                }}
                data-animationstate={animationToggleState}
            >
                {/*      {props.givenCarouselChild} */}
                {renderCarouselChild()}

            </div>

        )
    }

    //leaving functions, horizontal
    function renderAnimationCenterToLeft() {

        return (
            <div
                ref={scrollContainerRef}
                onScroll={sendMessage}
                className={`childRow carousel-page${props.isMobile}`}
                onAnimationEnd={SetAnimationStateHidden}
                style={{
                    animationName: "AnimationCenterToLeft",
                    animationDuration: animationSpeed,
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "1",
                    animationDirection: "normal",
                    animationFillMode: "forwards",


                }}
                data-animationstate={animationToggleState}
            >
                {/*      {props.givenCarouselChild} */}
                {renderCarouselChild()}
            </div>

        )
    }
    function renderAnimationCenterToRight() {

        return (
            <div
                ref={scrollContainerRef}
                onScroll={sendMessage}
                className={`childRow carousel-page${props.isMobile}`}
                onAnimationEnd={SetAnimationStateHidden}
                style={{
                    animationName: "AnimationCenterToRight",
                    animationDuration: animationSpeed,
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "1",
                    animationDirection: "normal",
                    animationFillMode: "forwards",


                }}
                data-animationstate={animationToggleState}
            >
                {/*   {props.givenCarouselChild} */}
                {renderCarouselChild()}


            </div>

        )
    }

    //leaving functions, vertical
    function renderAnimationCenterToTop() {

        return (
            <div
                ref={scrollContainerRef}
                onScroll={sendMessage}
                className={`childRow carousel-page${props.isMobile}`}
                onAnimationEnd={SetAnimationStateHidden}
                style={{
                    animationName: "AnimationCenterToTop",
                    animationDuration: animationSpeed,
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "1",
                    animationDirection: "normal",
                    animationFillMode: "forwards",

                }}
                data-animationstate={animationToggleState}
            >
                {/*     {props.givenCarouselChild} */}
                {renderCarouselChild()}

            </div>

        )
    }
    function renderAnimationCenterToBottom() {

        return (
            <div
                ref={scrollContainerRef}
                onScroll={sendMessage}
                className={`childRow carousel-page${props.isMobile}`}
                onAnimationEnd={SetAnimationStateHidden}
                style={{
                    animationName: "AnimationCenterToBottom",
                    animationDuration: animationSpeed,
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "1",
                    animationDirection: "normal",
                    animationFillMode: "forwards",


                }}
                data-animationstate={animationToggleState}
            >
                {/*        {props.givenCarouselChild} */}
                {renderCarouselChild()}


            </div>

        )
    }

    //idle and hidden functions
    function renderAnimationIdle() {

        return (
            <div
                ref={scrollContainerRef}
                id="idleChild"


                className={`childRow carousel-page${props.isMobile}`}
                data-animationstate={animationToggleState}

            >
                {/*      {props.givenCarouselChild} */}
                {renderCarouselChild()}

            </div>

        )
    }

    function renderCarouselChild() {
        return (<>



            {Array.isArray(props.givenCarouselChild) ? (
                <LockNumberContext.Provider value={props.givenLockNumber}>
                    {props.givenCarouselChild.map((child, index) => {
                        if (React.isValidElement(child)) {

                            /*     console.log('Type of givenCarouselChild:'); */
                            /*    console.log(typeof child);  *///THESE ARE THE HOLDERS!!!
                            return React.cloneElement(child, {
                                key: index, // Make sure to provide a key if rendering an array
                                givenGlobal_isMobile: props.isMobile,
                                givenGlobal_CurrentCarouselIndex: props.givenGlobal_CurrentCarouselIndex,
                                givenGlobal_PreviousCarouselIndex: props.givenGlobal_PreviousCarouselIndex,
                                givenGlobal_LockNumber: props.givenGlobal_LockNumber,
                                givenGlobal_PrepDestination: props.givenGlobal_PrepDestination,

                                givenGlobal_PatientNameFirst: props.givenGlobal_PatientNameFirst,
                                givenGlobal_PatientNameLast: props.givenGlobal_PatientNameLast,
                                givenGlobal_PatientAnesthesiaType: props.givenGlobal_PatientAnesthesiaType,
                                givenGlobal_PatientSex: props.givenGlobal_PatientSex,
                                givenGlobal_PatientAge: props.givenGlobal_PatientAge,
                                givenGlobal_PatientDateEnteredPatientFlow: props.givenGlobal_PatientDateEnteredPatientFlow,
                                givenGlobal_PatientDateOfProcedure: props.givenGlobal_PatientDateOfProcedure,
                                givenGlobal_PatientHasSeenProcedureIntro: props.givenGlobal_PatientHasSeenProcedureIntro,
                                givenGlobal_PatientPreferedLanguage: props.givenGlobal_PatientPreferedLanguage,
                                givenGlobal_PatientProcedureLocation: props.givenGlobal_PatientProcedureLocation,
                                givenGlobal_PatientTimeOfProcedure: props.givenGlobal_PatientTimeOfProcedure,
                                givenGlobal_TagsTrueArray: props.givenGlobal_TagsTrueArray,
                                givenGlobal_TagsFalseArray: props.givenGlobal_TagsFalseArray,
                                givenGlobal_MapToRead: props.givenGlobal_MapToRead,
                                givenGlobal_CurrentPageID: props.givenGlobal_CurrentPageID,
                                givenGlobal_CurrentModalID: props.givenGlobal_CurrentModalID,
                                givenGlobal_CurrentBookID: props.givenGlobal_CurrentBookID,

                            });
                        } else {
                            /*             console.log('Invalid React Element:', child);
                                        console.log('Type of givenCarouselChild:', typeof child); */
                            return child;
                        }
                    })}
                </LockNumberContext.Provider>
            ) : (
                (() => {
                    console.log(
                        'Expected an array of React elements, but received:',
                        props.givenCarouselChild
                    );
                    return null; // You can return null or handle the error as needed
                })()
            )}
        </>)

    }
    function renderAnimationHidden() {

        return (
            <div ref={scrollContainerRef} className="childRow carousel-page-hidden" id="hiddenChild" style={{ height: "0px" }}></div>
        )
    }




    function RenderMainItem() {


        //the "arriving" animations, horizontal
        if (animationToggleState === "AnimateFromRightToCenter") {
            return (renderAnimationRightToCenter());
        }
        else if (animationToggleState === "AnimateFromLeftToCenter") {
            return (renderAnimationLeftToCenter());
        }
        //the "arriving" animations, vertical
        else if (animationToggleState === "AnimateFromBottomToCenter") {
            return (renderAnimationBottomToCenter());
        }
        else if (animationToggleState === "AnimateFromTopToCenter") {
            return (renderAnimationTopToCenter());
        }

        //the "leaving" animations, horizontal
        else if (animationToggleState === "AnimateFromCenterToLeft") {
            return (renderAnimationCenterToLeft());
        }
        else if (animationToggleState === "AnimateFromCenterToRight") {
            return (renderAnimationCenterToRight());
        }

        //the "leaving" animations, vertical

        else if (animationToggleState === "AnimateFromCenterToTop") {
            return (renderAnimationCenterToTop());
        }
        else if (animationToggleState === "AnimateFromCenterToBottom") {
            return (renderAnimationCenterToBottom());
        }


        //the idle and hidden animations, will be called either at the end of a leaving or arriving animation only!

        else if (animationToggleState === "AnimateIdle") {
            return (renderAnimationIdle());
        }
        else if (animationToggleState === "AnimateHidden") {
            return (renderAnimationHidden());
        }
    }



    return (
        <>
            {RenderMainItem()}
        </>

    )
}