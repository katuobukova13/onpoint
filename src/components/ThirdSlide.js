import React, { useState } from "react";
import Header from "./Header";
import Onpoint from "./Onppoint";
import Button from "./Button";
import bottle from "../img/bottle.png";
import "../css/Third.css";
import Bubbles from "./Bubbles";
import Toast from "./Toast";
import plate from "../img/plate.png";
import schedule from "../img/schedule.png";

const ThirdSlide = () => {
  const [toastState, setToastState] = useState(false);

  const openToast = () => {
    setToastState(true);
  };

  return (
    <section className={toastState === true ? "project__dark" : "project"}>
      <Header />
      <img src={bottle} alt="bottle" className="bottle" />
      <div className="third__titles">
        <h2 className="third__title">КЛЮЧЕВОЕ СООБЩЕНИЕ</h2>
        <h1 className="third__title">
          BREND<span>XY</span>
        </h1>
      </div>
      <div className="third__blocks">
        <img src={plate} alt="plate" className="third__icon" />
        <div className="third__block">
          3 раза в день после еды. После приема препарата рекомендуется
          воздержаться от пищи и напитков в течение 1 часа
        </div>
        <img src={schedule} alt="schedule" className="third__icon" />
        <div className="third__block">Курс лечения от 7 дней до 1 мес.</div>
      </div>
      <Button
        text={"Подробнее"}
        id="btn__third"
        idName="#toast"
        onClick={openToast}
      />
      {toastState && (
        <Toast toaststate={toastState} setToastState={setToastState} />
      )}
      <Bubbles />
      <Onpoint />
    </section>
  );
};

export default ThirdSlide;
