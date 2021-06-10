import React from "react";
import "../Header.css";
import home from "../icons/home-2.svg";

function Header() {
  const svgPath = `${home}#svgView(preserveAspectRatio(none))`;
  return (
    <header className="header">
      <nav className="nav">
        <ul className="menu">
          <li className="menu__item">
            <a href="#first" className="menu__link">
              <img src={svgPath} width="24px" height="24px" alt="home" />
            </a>
          </li>
          <li className="menu__item">PROJECT</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
