import React, { useState } from "react";
import FirstSlide from "../firstSlide/FirstSlide";
import SecondSlide from "../secondSlide/SecondSlide";
import ThirdSlide from "../thirdSlide/ThirdSlide";
import "./WrapperSlides.css";

const WrapperSlides = () => {
  const [currentpage, setCurrentPage] = useState(0);
  const [x, setX] = useState(null);

  const handleTouchStart = (e) => {
    const touchStart = Math.ceil(e.touches[0].clientX);

    setX(touchStart);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = Math.ceil(e.changedTouches[0].clientX);

    let xDifference = x - touchEnd;
    console.log(xDifference);

    if (xDifference > 35 && currentpage <= 1) {
      setCurrentPage(currentpage + 1);
    }
    if (xDifference < -35 && currentpage >= 1) {
      setCurrentPage(currentpage - 1);
    }
    console.log(currentpage);
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
          transform: `translateX(${currentpage * -100}vw)`,
          transition: "transform 1000ms ease",
        }}
      >
        <FirstSlide currentpage={currentpage} setCurrentPage={setCurrentPage} />
        <SecondSlide
          currentpage={currentpage}
          setCurrentPage={setCurrentPage}
        />
        <ThirdSlide currentpage={currentpage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default WrapperSlides;
