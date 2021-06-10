import React from "react";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import "../App.css";

function WrapperSlides() {
  return (
    <div className="projects">
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
    </div>
  );
}

export default WrapperSlides;
