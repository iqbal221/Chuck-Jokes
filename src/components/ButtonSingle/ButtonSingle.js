import React from "react";
import "./ButtonSingle.css";

const ButtonSingle = ({ button }) => {
  return (
    <div className="button-single">
      <button style={{ backgroundColor: button.bg }}>{button.text}</button>
    </div>
  );
};

export default ButtonSingle;
