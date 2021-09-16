import React from "react";
import "./Button.css";

const Button = ({ text, id, onClick }) => {
  return (
    <button className="btn" id={id} onClick={onClick}>
      <div className="btn__arrow">
        <div></div>
      </div>
      <span id="btn__text">{text}</span>
    </button>
  );
};
export default Button;
