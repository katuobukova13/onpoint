import React from "react";
import Header from "./Header";
import Button from "./Button";
import pink_sperm from "../img/pink_sperm.png";
import bottom_blue from "../img/bottom_blue.png";
import left_blue from "../img/left_blue.png";
import right_blue from "../img/right_blue.png";
import top_blue from "../img/top_blue.png";
import FirstText from "./FirstText";
import Onpoint from "./Onppoint";

const FirstSlide = ({ current }) => {
  /*   const translate =
    props.current > 0
      ? "translate3d(1024px, 0, 1px)"
      : "translate3d(0, 0px, 1px)";
  const styleTranslate = {
    transform: translate,
    transition: "0.5s",
  }; */
  return (
    <section className="project" id="first" current={current}>
      <Header />
      <FirstText />
      <Button text={"Что дальше?"} idName="#second" id="btn__first" />
      <img className="img__sperm" src={pink_sperm} alt="pink_sperm" />
      <img className="img__top" alt="top" src={top_blue} />
      <img className="img__right" alt="right" src={right_blue} />
      <img className="img__bottom" alt="bottom" src={bottom_blue} />
      <img className="img__left" alt="left" src={left_blue} />
      <Onpoint />
    </section>
  );
};

export default FirstSlide;
