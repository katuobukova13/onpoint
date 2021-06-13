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

function FirstSlide() {
  return (
    <section className="project" id="first">
      <Header />
      <FirstText />
      <Button value={"Что дальше?"} idName="#second" id="btn__first" />
      <img className="img__sperm" src={pink_sperm} alt="pink_sperm" />
      <img className="img__top" alt="top" src={top_blue} />
      <img className="img__right" alt="right" src={right_blue} />
      <img className="img__bottom" alt="bottom" src={bottom_blue} />
      <img className="img__left" alt="left" src={left_blue} />
      <Onpoint />
    </section>
  );
}

export default FirstSlide;
