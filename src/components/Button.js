import React from "react";
import "../Button.css";

function Button({ value }) {
  return (
    <a href="#second">
      <button className="btn">
        <div className="arrow">
          <span></span>
          <div></div>
        </div>
        <span id="btn__text">{value}</span>
      </button>
    </a>
  );
}

export default Button;
