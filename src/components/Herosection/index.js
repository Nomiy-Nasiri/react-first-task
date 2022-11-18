import React from "react";
import Button from "../Button";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="tit1">
        <h2>
          havean explorer<br></br> pakistan
        </h2>
      </div>
      <div className="tit1">
        <p>
          havean explorer pakistan supporting tourist to make: <br></br>
          plan, manage, and operate trips in Gilgit baltistan,pakistan
        </p>
      </div>
      <Button name="Read more"  id="read-more"/>
    </div>
  );
}
