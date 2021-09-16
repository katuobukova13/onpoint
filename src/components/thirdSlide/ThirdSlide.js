import React, { useState } from "react";
import Header from "../header/Header";
import Onpoint from "../onPoint/Onppoint";
import Button from "../button/Button";
import bottle from "../../img/bottle.png";
import "./Third.css";
import Bubbles from "../bubbles/Bubbles";
import Toast from "../toast/Toast";
import plate from "../../img/plate.png";
import schedule from "../../img/schedule.png";

const ThirdSlide = ({ currentpage, setCurrentPage }) => {
  const [toastState, setToastState] = useState(false);

  const openToast = () => {
    setToastState(true);
  };

  return (
    <section
      className={toastState === true ? "slide__dark" : "slide"}
      currentpage={currentpage}
    >
      <Header currentpage={currentpage} setCurrentPage={setCurrentPage} />
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
      <Button text={"Подробнее"} id="btn__third" onClick={openToast} />
      {toastState && (
        <Toast toaststate={toastState} setToastState={setToastState} />
      )}
      <Bubbles />
      <Onpoint />
    </section>
  );
};

export default ThirdSlide;
