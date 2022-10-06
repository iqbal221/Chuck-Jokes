import React from "react";
import "./ButtonSingle.css";

const ButtonSingle = (props) => {
  return (
    <div className="button-single">
      <button style={{ backgroundColor: props.background }}>
        {props.text}
      </button>
    </div>
  );
};

export default ButtonSingle;
