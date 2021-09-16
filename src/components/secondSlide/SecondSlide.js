import React, { useState, useRef } from "react";
import Header from "../header/Header";
import "./Second.css";
import Onpoint from "../onPoint/Onppoint";
import second_sperms from "../../img/second_sperms.png";

const MAX_SCROLL_VALUE = 100;

const SecondSlide = ({ currentpage, setCurrentPage }) => {
  const myRef = useRef();
  const [inputState, setInputState] = useState(0);
  const [textState, setTextState] = useState(0);

  const handleChange = (e) => {
    let value = e.target.value;

    const {
      scrollHeight: containerScrollHeight,
      offsetHeight: containerOffsetHeight,
      scrollTop: containerScrollTop,
    } = myRef.current;

    const scrollValue =
      (containerScrollHeight - containerOffsetHeight) *
      (value / MAX_SCROLL_VALUE);

    const scrollDifference = Math.ceil(scrollValue - containerScrollTop);

    myRef.current.scrollBy({
      top: scrollDifference,
      behavior: "smooth",
    });

    setInputState(value);
  };

  const handleTouchMove = (e) => {
    const value = textState;

    const {
      scrollHeight: containerScrollHeight,
      offsetHeight: containerOffsetHeight,
      scrollTop: containerScrollTop,
    } = myRef.current;

    const scrollValue =
      containerScrollHeight -
      containerOffsetHeight * (value / MAX_SCROLL_VALUE);

    const textScroll = Math.floor(scrollValue - containerScrollTop);

    myRef.current.scrollBy({
      top: textScroll,
      behavior: "smooth",
    });

    setTextState(textScroll);
  };

  return (
    <section className="slide" id="second" currentpage={currentpage}>
      <Header currentpage={currentpage} setCurrentPage={setCurrentPage} />
      <div className="title">
        <p className="title__text">Текст</p>
        <p className="title__text">сообщения</p>
      </div>
      <div>
        <input
          type="range"
          className="range"
          onInput={handleChange}
          value={inputState}
          max={MAX_SCROLL_VALUE}
        />
        <div
          className="spermtext"
          ref={myRef}
          onTouchMove={handleTouchMove}
          text={textState}
        >
          <p className="spermtext__paragraph">
            <span className="spermtext__name">Сперматозoид</span> (от др.-греч.
            σπέρμα род. п. σπέρματος здесь «сперма» + ζωή «жизнь» + εἶδος «вид,
            облик», лат. spermatozoon, spermium) — мужская половая клетка
            (гамета) размножающихся посредством оогамии организмов.
          </p>
          <p className="spermtext__paragraph">
            Сперматозоиды обычно обладают способностью к активному движению и
            служат для оплодотворения женской гаметы — яйцеклетки. Обычно они
            значительно меньше яйцеклеток, поскольку не содержат столь
            значительного количества цитоплазмы и производятся организмом
            одновременно в значительном количестве.
          </p>
          <p className="spermtext__paragraph">
            Типичное строение сперматозоида отражает форму общего предка
            животных и грибов: одноклеточный ядерный организм, передвигающийся
            за счёт жгутика в задней части, используя его подобно хвосту.
            Обширная группа происходящих от него организмов включает в себя
            животных, большинство грибов и некоторые группы протистов и
            называется кланом заднежгутиковых. Большинство других эукариот со
            жгутиками имеют их в передней части.
          </p>
          <p className="spermtext__paragraph">
            В широком смысле слова по традиции сперматозоидами иногда называют
            мужские половые клетки также у растений, к ним применяют также
            термины спермии или антерозоиды (их применяют также к традиционно
            сближавшимся с растениями грибам).
          </p>
          <p className="spermtext__paragraph">
            https://ru.wikipedia.org/wiki/сперматозоид
          </p>
        </div>
      </div>
      <img
        src={second_sperms}
        alt="sperms"
        className={currentpage === 1 ? "second_sperms" : "none"}
      />
      <Onpoint />
    </section>
  );
};

export default SecondSlide;
