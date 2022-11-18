import React from "react";
import Cards, { User } from "./cards";
export default function MapCards() {
  return (
    <div>
      <div className="heading">
        <p>our services</p>
      </div>

      <div className="body ">
        {User.map((item) => {
          return (
            <Cards
              Event={item.Event}
              image1={item.image}
              btnText={item.btnText}
            />
          );
        })}
      </div>
    </div>
  );
}
