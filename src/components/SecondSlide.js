import React, { useState, useEffect, createRef, onScroll } from "react";
import Header from "./Header";
import "../css/Second.css";
import Onpoint from "./Onppoint";

function SecondSlide() {
  const myRef = createRef();
  /*   const [state, setState] = useState({ scrollTop: 0 });

  const onTouchMove = () => {
    const scrollTop = myRef.current.scrollTop;
    setState({
      scrollTop: scrollTop,
    });
    console.log(scrollTop);
  }; */

  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
    const percent = value / 100;
    const height = myRef.current.scrollHeight;
    const scrollTop = myRef.current.scrollTop;
    const change = (height - scrollTop) * percent;
    console.log(change);
    const elementPosition = myRef.current.getBoundingClientRect().top + 35;
    let offsetPosition = elementPosition - scrollTop;
    myRef.current.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {}, [myRef]);

  return (
    <section className="project" id="second">
      <Header />
      <div className="title">
        <p className="title__text">Текст</p>
        <p className="title__text">сообщения</p>
      </div>
      <div>
        <input
          type="range"
          className="range"
          min="0"
          max="10"
          step="0.01"
          onInput={handleChange}
          /*           onTouchMove={onTouchMove} */
        />
        <div className="spermtext" ref={myRef}>
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
      <Onpoint />
    </section>
  );
}

export default SecondSlide;
