import React from "react";
import Header from "./Header";
import Button from "./Button";
import pink_sperm from "../img/pink_sperm.png";

function FirstSlide() {
  return (
    <section className="project" id="first">
      <Header />
      <div className="text">
        <p className="text__hello">Привет,</p>
        <p className="text__main">
          ЭТО
          <span className="text__main text__not"> НЕ</span>
        </p>
        <p className="text__main">КОММЕРЧЕСКОЕ</p>
        <p className="text__main">ЗАДАНИЕ</p>
      </div>
      <img src={pink_sperm} alt={pink_sperm} className="text__img" />
      <Button value={"Что дальше?"} />
    </section>
  );
}

export default FirstSlide;
