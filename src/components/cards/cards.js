import React from "react";
import image1 from "../assets/ex.png";
import image2 from "../assets/hike.png";
import image3 from "../assets/trek.png";
import image4 from "../assets/br.png";
import image5 from "../assets/bt.png";
import image6 from "../assets/cl.png";
import image7 from "../assets/cmp.png";
import image8 from "../assets/hk.png";

import Button from "../Button";

export default function Cards({ Event, image1, btnText }) {
  return (
    <div className="cardbody">
      <div className="card">
        <div className="cardName">
          <h3>{Event}</h3>
        </div>
        <div className="crdpic">
          <img src={image1} />
        </div>

        <Button name={btnText || "explore"} />
      </div>
    </div>
  );
}
export const User = [
  {
    Event: "climbing",
    image: image1,
    btnText: "explore",
  },
  {
    Event: "treking",
    image: image2,
    btnText: "ride",
  },
  {
    Event: "hiking",
    image: image3,
    btnText: "fly",
  },
  {
    Event: "hiking",
    image: image4,
  },
  {
    Event: "boating",
    image: image5,
  },
  {
    Event: "climbing",
    image: image6,
  },
  {
    Event: "camping",
    image: image7,
  },
  {
    Event: "hiking",
    image: image8,
  },
  {
    Event: "ter ar niyas",
    image: image3,
  },
];
