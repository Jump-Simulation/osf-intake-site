import React from "react";

interface Eddies_Custom_Carousel_Dots_Props {
  index: number;
  active: boolean;
  currentSlide: number;
  givenNumberOfDots: number;
  givenCustomBackgroundColor: string;
  givenCustomColor: string;
  onClick?: () => void;
}


export default function Eddies_Custom_Carousel_Dots(props: Eddies_Custom_Carousel_Dots_Props) {

  let dotColor = "#b5c4f4"; // Default color for non-active dots

  if (props.givenCustomBackgroundColor !== "default") {
    dotColor = props.givenCustomBackgroundColor;
  }
  else {
    dotColor = "#b5c4f4"
  }


  let dotHeight = "8px";
  let dotWidth = `calc(100% / ${props.givenNumberOfDots})`;
  let borderRadiusVariable = "0px";

  /*   console.log("GIVEN INDEX FOR DOT IS: " + props.index + " CURRENT INDEX IS: " + props.currentSlide) */


  if (props.active) {
    if (props.givenCustomColor !== "default") {
      dotColor = props.givenCustomColor
    }
    else {
      dotColor = "#1745e3"; // Current dot
    }

    /*     console.log("DOT AT INDEX: " + props.index + " is ACTIVE!!!") */
    borderRadiusVariable = "0px 100px 100px 0px";

  } else if (props.index < props.currentSlide) {

    if (props.givenCustomColor !== "default") {
      dotColor = props.givenCustomColor
    }
    else {
      dotColor = "#1745e3"; // Current dot
    }


    /*    console.log("DOT AT INDEX: " + props.index + " is NOT ACTIVE!!!") */
  }

  /*   if (props.index === 0) {
      borderRadiusVariable = "10px 0px 0px 10px";
    }
    if (props.index === props.givenNumberOfDots - 1) {
      console.log("we found the last dot!!")
      borderRadiusVariable = "0px 10px 10px 0px";
    } */

  /*  console.log("found a dot at index: " + props.index + " given length is: " + props.givenNumberOfDots)
  */
  return (

    <div
      onClick={props.onClick}
      style={{
        display: "inline-block",
        width: dotWidth,
        height: dotHeight,
        borderRadius: borderRadiusVariable,
        backgroundColor: dotColor,
        margin: "0px",
        cursor: "default",

      }}
    ></div>


  );
}


