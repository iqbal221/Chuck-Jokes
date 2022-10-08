import React from "react";
import "./CardSingle.css";

const CardSingle = ({ joke }) => {
  return (
    <div className="card">
      <p>{joke.value}</p>
    </div>
  );
};

export default CardSingle;
