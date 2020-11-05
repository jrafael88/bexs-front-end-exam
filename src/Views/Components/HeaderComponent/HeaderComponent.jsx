import React from "react";

import logo from "../../../images/logo.svg";

import "./HeaderComponent.scss";

function HeaderComponent() {
  return (
    <header className="header">
      <div className="header__center">
        <div>
          <img src={logo} className="header__logo" alt="Logo" />
        </div>
        <ul className="header__nav">
          <li className="header__nav--item"></li>
          <li className="header__nav--item"></li>
          <li className="header__nav--item"></li>
          <li className="header__nav--item"></li>
          <li className="header__nav--item"></li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderComponent;
