import React, { useState, useRef } from "react";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import "../App.css";

const WrapperSlides = () => {
  const [swipe, setSwipe] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [x, setX] = useState(null);

  const handleTouchStart = (e) => {
    const touchStart = Math.ceil(e.touches[0].clientX);

    setX(touchStart);
    setSwipe(false);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = Math.ceil(e.changedTouches[0].clientX);

    let xDifference = x - touchEnd;
    console.log(xDifference);

    if (xDifference > 50 && currentPage <= 1) {
      setCurrentPage(currentPage + 1);
      setSwipe(true);
    }
    if (xDifference < -50 && currentPage >= 1) {
      setCurrentPage(currentPage - 1);
      setSwipe(true);
    }
    console.log(currentPage);
  };

  return (
    <div
      className="projects"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="line"
        style={{ transform: `translateX(${currentPage * -100}vw)` }}
        swipe={swipe}
      >
        <FirstSlide currentPage={currentPage} />
        <SecondSlide currentPage={currentPage} />
        <ThirdSlide currentPage={currentPage} />
      </div>
    </div>
  );
};

export default WrapperSlides;

/*     let yDifference = y2 - y; */

/*     console.log(xDifference, yDifference); */

/*     if (Math.abs(xDifference) > Math.abs(yDifference)) {
      if (xDifference > 0) {
      }
    } else {
    } */

/*    const slides = sliderRef.current.scrollWidth;
    const N = sliderRef.current.children.length;
    const slideWidth = slides / N;
    let index = N / 3;
    console.log(slideWidth); */

/*     let x2 = Math.ceil(e.touches[0].clientX);
    let y2 = Math.ceil(e.touches[0].clientY);
    console.log(x2, y2); */

/*     if (!x || !y) {
      return setSwipe(false);
    } */

/*     setY(Math.ceil(touch.clientY)); */

/*     console.log(touchStart); */

/*   const [y, setY] = useState(null); */

/*   const swipeToRight = (slideWidth) => {
     let slide = sliderRef.current.children;
    console.log(slide);
    const slideIndex = 0;
    let slideWidth = slide[0].offsetWidth;
    sliderRef.current.style.transform = `translate3d(-${
      slideIndex * slideWidth
    }px, 0px, 0px)`;
    let index = 2;
    sliderRef.current.scrollTo({
      right: `${index * slideWidth}`,
      behavior: "smooth",
    });
    /*     setSwipe(offset); */
/*     sliderRef.current.style.left = `${index * slideWidth}`;
    console.log(swipe);
  };*/

/*     let value = 0;
    sliderRef.current.scrollTo({
      left: 1024,
      behavior: "smooth",
    }); */
/*     setSwipe(value); */
