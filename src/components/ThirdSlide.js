import React from "react";
import Header from "./Header";
import Onpoint from "./Onppoint";
import Button from "./Button";
import bottle from "../img/bottle.png";
import "../css/Third.css";

function ThirdSlide() {
  return (
    <section className="project">
      <Header />
      <img src={bottle} alt="bottle" className="bottle" />
      <div className="third__titles">
        <h2>КЛЮЧЕВОЕ СООБЩЕНИЕ</h2>
        <h1>
          BREND <span>X Y </span>
        </h1>
      </div>
      <div className="third__blocks">
        <div className="third__block">
          3 раза в день после еды. После приема препарата рекомендуется
          воздержаться от пищи и напитков в течение 1 часа
        </div>
        <div className="third__block">Курс лечения от 7 дней до 1 мес.</div>
      </div>
      <Button value={"Подробнее"} id="btn__third" />
      <Onpoint />
    </section>
  );
}

export default ThirdSlide;
