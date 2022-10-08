import React from "react";
import "./Footer.css";
import image from "../../assets/assets_Homework_Front-End_01/path.png";

const Footer = () => {
  return (
    <div className="footer-img">
      <div className="submit-link">
        <h3>
          GOT JOKES? GET PAID<br></br>FOR SUBMITTING!
        </h3>
        <span>
          SUBMIT JOKE <img src={image} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
