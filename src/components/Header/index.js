import React from "react";
import Imagelg from "../assets/logo.png";
import "./taskk.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Imagelg} alt='image'/>
      </div>
      <div className="title">
        <h2>havean explorer pakistan</h2>
        <p>local and tour website</p>
      </div>
      <div>
        <ul className="list">
          <li>home</li>
          <li>services</li>
          <li>offers</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="btn">
        <button>book a trip</button>
      </div>
    </div>
  );
};

export default Header;
