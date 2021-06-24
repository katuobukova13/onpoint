import React, { useState, useRef } from "react";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import "../App.css";

const WrapperSlides = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [x, setX] = useState(null);

  const handleTouchStart = (e) => {
    const touchStart = Math.ceil(e.touches[0].clientX);

    setX(touchStart);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = Math.ceil(e.changedTouches[0].clientX);

    let xDifference = x - touchEnd;
    console.log(xDifference);

    if (xDifference > 50 && currentPage <= 1) {
      setCurrentPage(currentPage + 1);
    }
    if (xDifference < -50 && currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage);
  };

  return (
    <div
      className="container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="line"
        style={{
          transform: `translateX(${currentPage * -100}vw)`,
          transition: "transform 1000ms ease",
        }}
      >
        <FirstSlide currentPage={currentPage} />
        <SecondSlide currentPage={currentPage} />
        <ThirdSlide currentPage={currentPage} />
      </div>
    </div>
  );
};

export default WrapperSlides;

