import React from "react";
import { Link } from "react-router-dom";
import MyImage from "../cocktail.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--image">
        <Link to={"/"}>
          <img
            className="navbar--image"
            src={MyImage}
            alt="Cocktail"
          />
        </Link>
      </div>
      <ul className="navbar--links">
        <li>
          <Link to={"/"} className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to={"about"} className="link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
