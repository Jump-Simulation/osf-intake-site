import { Button, Col, Row } from "react-bootstrap";
import "../CSS/Styles_Eddies_Carousel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, forwardRef, useRef, UIEvent, ReactElement } from "react";
import Eddies_Custom_Carousel_Dots from "./Eddies_Custom_Carousel_Dots";
import Eddies_Custom_Carousel_Item, { Eddies_Custom_Carousel_Item_Props } from "./Eddies_Custom_Carousel_Item";





import "../CSS/Styles_Eddies_Carousel.css"
import Object_Item_ModalShadow from "./Page_Components/Object_Item_ModalShadow";
import Object_Item_NavBarSpacer from "./Page_Components/Object_Item_NavBarSpacer";
import Object_Button_ArrowUp from "./Page_Components/Object_Button_ArrowUp";
import Object_Button_NavMenuButton from "./Page_Components/Object_Button_NavMenuButton";
import Object_Item_NavMenu from "./Page_Components/Object_Item_NavMenu";
import { BaseCarouselChildProps } from "../BaseProps";
import DebugMobileScreen from "./DebugMobileScreen";



export enum CarouselOrientation {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}


interface Eddies_Custom_Carousel_Props extends BaseCarouselChildProps {

    isMobile: string;

    givenShowNavMenu: boolean;
    givenSetShowNavMenu(givenBool: boolean): void;

    givenCarouselOrientation: CarouselOrientation;

    givenCarouselChildren: ReactElement<Eddies_Custom_Carousel_Item_Props>[];
    givenCarouselChildrenCount: number;


    givenCurrentIndex: number;
    givenSetCurrentIndex(givenNumber: number): void;

    givenPreviousIndex: number;
    givenSetPreviousIndex(givenNumber: number): void;

    givenGoToDestination(givenDestination: string): void;

    showDotsBool: boolean;
    showArrowsBool: boolean;


    shouldShowModalShadow: boolean;

    givenLockNumber: number;

    givenPageBackgroundColor: string;

}

export default function Eddies_Custom_Carousel(props: Eddies_Custom_Carousel_Props) {


    var carouselOrientation: string;
    if (props.givenCarouselOrientation == CarouselOrientation.Horizontal) {
        carouselOrientation = "carousel-homebrewed-orientation-horizontal";
    }
    else {
        carouselOrientation = "carousel-homebrewed-orientation-vertical";
    }


    useEffect(() => {
        const childrenElements = document.querySelectorAll(".intro-child-element");

        childrenElements.forEach((element) => {
            const parentElement = element.parentElement;
            parentElement!.style.display = "flex";
            parentElement!.style.placeContent = "center";
        });

    }, []); // Empty dependency array to run the effect only once after mount 



    const element = document.querySelector("div#scroll-box");
    const output = document.querySelector("p#output");




    const nextSlide = () => {
        /*       if (sliderRef.current) {
                  sliderRef.current.slickNext();
                  setCurrentSlide(currentSlide + 1);
              }
       */
        if (props.givenCurrentIndex < props.givenCarouselChildrenCount - 1) {
            props.givenSetPreviousIndex(props.givenCurrentIndex);
            props.givenSetCurrentIndex(props.givenCurrentIndex + 1);
        }


        //next slide
    };

    const previousSlide = () => {
        /*        if (sliderRef.current) {
                   sliderRef.current.slickPrev();
                   // Update the current slide directly
                   setCurrentSlide(currentSlide - 1);
               }
        */

        if (props.givenCurrentIndex > 0) {
            props.givenSetPreviousIndex(props.givenCurrentIndex);
            props.givenSetCurrentIndex(props.givenCurrentIndex - 1);

        }



        //previous slide
    };


    const customNextArrow = (
        <Button
            style={{
                backgroundColor: "transparent",
                borderRadius: "50%",
                width: "10cqh",
                height: "10cqh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderColor: "transparent",
            }}
        >
            <FontAwesomeIcon
                icon={faCircleArrowRight as IconProp}
                color="rgb(102,12,110)"
                style={{ fontSize: "5cqh" }}
            />
        </Button>
    );
    const customPrevArrow = (
        <Button
            style={{
                backgroundColor: "transparent",
                borderRadius: "100px",
                width: "10cqh",
                height: "10cqh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderColor: "transparent",
            }}
        >
            <FontAwesomeIcon
                icon={faCircleArrowLeft as IconProp}
                color="rgb(102,12,110)"
                style={{ fontSize: "5cqh" }}
            />
        </Button>
    );




    const handleUIEvent = (e: UIEvent<HTMLDivElement>) => {
        console.log("scrolling detected!!")
    };

    function sendMessage() {
        console.log("scrolling detected on CUSTOM CAROUSEL!!")
    }


    return (<>


        <div
            data-shouldshowshadow={props.shouldShowModalShadow}
            className={`carousel-holder${props.isMobile}`}
            style={{
                ...(props.givenPageBackgroundColor !== "default" && {
                    backgroundColor: props.givenPageBackgroundColor,
                }),
            }}
            id="COL CONTAINING SPECIFICALLY THE SLIDER"
            onScroll={sendMessage}
        >



            <div className={`carousel-pages-holder ${carouselOrientation}`}>

                {/* <div>render children here as is!</div> */}
                <div className={`carousel-pages-holder ${carouselOrientation}`}>
                    {React.Children.map(props.givenCarouselChildren, (child) => {


                        /*       console.log("Carousel Child Item exclude by default === " + child.props.globalGiven_ShouldExcludeByDefault)
      
       */
                        if (React.isValidElement(child) && child.type === Eddies_Custom_Carousel_Item) {
                            return React.cloneElement(child, {
                                givenCurrentIndex: props.givenCurrentIndex,

                                isMobile: props.isMobile,


                                givenLockNumber: props.givenLockNumber,
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

                                givenGlobal_CurrentCarouselIndex: props.givenCurrentIndex,
                                givenGlobal_PreviousCarouselIndex: props.givenPreviousIndex,
                                givenGlobal_LockNumber: props.givenGlobal_LockNumber,
                                givenGlobal_CurrentPageID: props.givenGlobal_CurrentPageID,
                                givenGlobal_CurrentModalID: props.givenGlobal_CurrentModalID,
                                givenGlobal_CurrentBookID: props.givenGlobal_CurrentBookID


                            });
                        }
                        else {
                            return (<></>)
                        }

                    })}
                </div>

            </div>

            {/*    <div //CONTAINS THE DOTS

                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
               
                    width: "100%", 
                    height: "36px",

                    position: "absolute", //RECENTLY ADDED, MIGHT BE JANK!!
                    left: "0", //RECENTLY ADDED, MIGHT BE JANK!!
                    top: "0", //RECENTLY ADDED, MIGHT BE JANK!!

                }}
            >
                {renderCustomDots()}
            </div> */}



        </div>

    </>)

}