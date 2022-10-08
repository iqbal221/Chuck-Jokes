import React from "react";
import "./ButtonSingle.css";

const ButtonSingle = (props) => {
  const { text, background } = props;

  const handleCategoriesJokes = (text, joke) => {
    console.log(text, joke);
  };
  return (
    <div className="button-single">
      <button
        onClick={() => handleCategoriesJokes(text)}
        style={{ backgroundColor: background }}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonSingle;
