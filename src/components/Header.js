import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import bobBanner from "../images/bob-banner.png";
import bobLogo from "../images/bobs-burgers-logo.png";
import burgerTitle from "../images/burger-title.png";
const Header = () => {
  return (
    <>
      <div className="top-nav">
        <div>
          <img src={bobLogo} alt="Bob's burger logo" />
          <img  className="burgerTitle"src={burgerTitle} alt="Bob's burger logo title" />
        </div>
        <ul className="nav-ul">
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>
          <li>
            <Link to="/viewerInfo">Viewers</Link>
          </li>
        </ul>
      </div>
      <img className="banner" src={bobBanner} alt="Bob's burger banner" />
    </>
  );
};

export default Header;
