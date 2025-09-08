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


interface Eddies_Custom_Carousel_Props {

    isMobile: string;



    givenCarouselOrientation: CarouselOrientation;

    givenCarouselChildren: ReactElement<Eddies_Custom_Carousel_Item_Props>[];
    givenCarouselChildrenCount: number;


    givenCurrentIndex: number;
    givenSetCurrentIndex(givenNumber: number): void;

    givenPreviousIndex: number;
    givenSetPreviousIndex(givenNumber: number): void;



    showDotsBool: boolean;
    showArrowsBool: boolean;








}

export default function Eddies_Custom_Carousel_Redux(props: Eddies_Custom_Carousel_Props) {


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
            onClick={() => { nextSlide() }}
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

            onClick={() => { previousSlide() }}
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

            className={`carousel-holder${props.isMobile}`}


            id="COL CONTAINING SPECIFICALLY THE SLIDER"
            onScroll={sendMessage}
        >

            {props.showArrowsBool && (
                <>
                    {customPrevArrow}
                    {customNextArrow}
                </>
            )}

            <div className={`carousel-pages-holder ${carouselOrientation}`}>

                {/* <div>render children here as is!</div> */}
                <div className={`carousel-pages-holder ${carouselOrientation}`}>
                    {React.Children.map(props.givenCarouselChildren, (child) => {


                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                givenCurrentIndex: props.givenCurrentIndex,

                                isMobile: props.isMobile,



                            });
                        }
                        else {
                            return (<></>)
                        }

                    })}
                </div>

            </div>





        </div>

    </>)

}