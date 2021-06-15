import React from "react";
import "../css/Button.css";

const Button = ({ text, idName, id, onClick }) => {
  return (
    <a href={idName} className={idName ? "link_1" : "link_3"}>
      <button className="btn" id={id} onClick={onClick}>
        <div className="btn__arrow">
          <div></div>
        </div>
        <span id="btn__text">{text}</span>
      </button>
    </a>
   );
};
export default Button;
