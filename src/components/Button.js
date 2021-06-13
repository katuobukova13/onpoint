import React from "react";
import "../css/Button.css";

function Button({ value }) {
  return (
    <a href="#second">
      <button className="btn">
        <div className="btn__arrow">
          <div></div>
        </div>
        <span id="btn__text">{value}</span>
      </button>
    </a>
  );
}

export default Button;
