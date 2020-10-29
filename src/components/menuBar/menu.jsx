import React from "react";
import NasaLog from '../images/nasa.jpg'

const menu = () => {
  return (
    <div className="menu">
      <ul className="menu__row">
        <li className="menu__list">
          <a href="/" className="menu__link">
            Mars Rover
          </a>
        </li>
        <li className="menu__list">
          <a href="/" className="menu__logo">
           <img src={NasaLog}/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default menu;
