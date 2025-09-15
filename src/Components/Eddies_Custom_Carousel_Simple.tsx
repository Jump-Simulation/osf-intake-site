import React, { ReactNode, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Custom arrow components



interface CarouselProps {
    children: ReactNode;
    slidesToShow?: number;
    infinite?: boolean;
    onIndexChange?: (newIndex: number) => void; // add this
}

export default function Eddies_Custom_Carousel_Simple(props: CarouselProps) {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1, // number of visible slides
        slidesToScroll: 1,
        arrows: false, // we'll use custom top arrows
        dots: false,
        beforeChange: (current: number, next: number) => setCurrentIndex(next),
        swipe: false,        // disable touch swipe
        draggable: false,    // disable mouse drag
        /* centerMode: true,  */         // 👈 enables padding around slides
        centerPadding: "20px",     // 👈 adjust spacing (px or %)


    };

    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const slickTracks = document.querySelectorAll<HTMLDivElement>(".slick-track");
        const slickList = document.querySelectorAll<HTMLDivElement>(".slick-list");
        slickList.forEach((track) => {
            track.style.overflow = "hidden";
        });
        slickTracks.forEach((track) => {
            track.style.display = "flex";
        });
    }, []);


    const element = document.querySelector("div#scroll-box");
    const output = document.querySelector("p#output");

    const sliderRef = useRef<Slider>(null);
    const childrenArray = React.Children.toArray(props.children);
    return (
        <div style={{ width: "100%", margin: "0 auto" }}>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
                <div onClick={() => sliderRef.current?.slickPrev()} style={{ cursor: "pointer" }}>
                    <img src="/assets/circle-arrow-left.png"></img>
                </div>
                <div onClick={() => sliderRef.current?.slickNext()} style={{ cursor: "pointer" }}>
                    <img src="/assets/circle-arrow-right.png"></img>
                </div>
            </div>

            {/* Dots above arrows */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center", marginBottom: "10px", gap: "8px", padding: "5px"
            }}>
                {childrenArray.map((_, idx) => (
                    <div
                        key={idx}
                        style={{
                            width: idx === currentIndex ? "16px" : "12px",
                            height: idx === currentIndex ? "16px" : "12px",
                            borderRadius: "50%",
                            backgroundColor: idx === currentIndex ? "#3C6A00" : "#BFC8CA",
                            cursor: "pointer",
                            transition: "all 0.3s ease", // <-- smooth transition
                        }}
                        onClick={() => sliderRef.current?.slickGoTo(idx)}
                    />
                ))}
            </div>
            <Slider ref={sliderRef} {...settings}>
                {React.Children.map(props.children, (child) => (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%", // ensures slide fills slider height

                        }}
                    >
                        {child}
                    </div>
                ))}
            </Slider>
        </div>
    );
};