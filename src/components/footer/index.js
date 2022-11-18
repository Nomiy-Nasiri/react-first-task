import React from "react";
import "./index.css";
import imagelg from "..//assets/logo.png";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="ftr-logo">
        <div className="ftr-pic">
          <img src={imagelg} />
        </div>
        <div className="ftr-heading">
          <h3>havean explorer pakistan</h3>
          <p>local and tour website</p>
        </div>
      </div>
      <div className="contact">
        <div className="cnt-head">
          <p>contact us</p>
        </div>
        <div className="cnt-list">
          <ul>
            <li>info@heavengilgitbasltistan.org</li>
            <li>03115518162</li>
            <li>flat #4 hunxa plaza osama chow sukarkoie danyore</li>
            <li>hanza-pakistan@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="cnt-head">
            <p>follow us</p>
        </div>
        <div>
            <i></i>
            <i></i>
            <i></i>
        </div>
      </div>
      {/* <div className="copy-rit">
        <p>Copyright © 2020. All right reserved</p>
        </div> */}
    </div>
  );
}
