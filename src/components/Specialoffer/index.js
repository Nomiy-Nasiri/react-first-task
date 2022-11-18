import React from "react";
import "./offers.css";
import Image from "../assets/br.png";
import Imagecm from "../assets/cmp.png";

export default function services() {
  return (
    <div className="container">
      <div className="offer-heading">
        <h1>special offer for you</h1>
      </div>
      <div className="content">
        <div className="offer-details">
          <div className="ourserv">
            <h3>hunza 25% off </h3>

            <p className="para1">5 days tour to hunxa valley</p>
            <p className="para2">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising <br></br> pain was born and I will give you
              a complete account of the system, and expound the actual<br></br>
              teachings of the great explorer of the truth, the master-builder
              of human happiness.
            </p>
            <div className="offer-btn">
              <button>book now</button>
            </div>
          </div>
        </div>
        <div className="event-pic">
          <img src={Image} id="pic" />
        </div>
        <div className="event-pic">
          <img src={Imagecm} />
        </div>
        <div className="offer-details">
          <div className="ourserv">
            <h3>nalter 35% off </h3>
            <p className="para1" id="days">
              8 days tour to nalter valley
            </p>
            <p className="para2" id="days">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising <br></br> pain was born and I will give you
              a complete account of the system, and expound the actual<br></br>
              teachings of the great explorer of the truth, the master-builder
              of human happiness.
            </p>
            <div className="offer-btn">
              <button>book now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
