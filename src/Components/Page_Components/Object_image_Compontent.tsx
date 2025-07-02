import React from "react";
import rocketman from "../../assets/qa-astro-man.png";

export default function OverflowImage() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "-50%", // pushes half of the image off the bottom
        left: "50%",
        transform: "translateX(-50%)",
        height: "200px", // or any size you want
      }}
    >
      <img src={rocketman} alt="Overflowing image" />
    </div>
  );
}
