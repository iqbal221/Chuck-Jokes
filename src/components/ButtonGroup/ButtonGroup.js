import React from "react";
import "./ButtonGroup.css";
import ButtonSingle from "../ButtonSingle/ButtonSingle";

const ButtonGroup = () => {
  const ButtonInfo = [
    { id: 1, text: "ADULT JOKES", bg: "#ff5b5b" },
    {
      id: 2,
      text: "DAD JOKES",
      bg: "#ff915b",
    },
    {
      id: 3,
      text: "CHRISTMAS JOKES",
      bg: "#ffbe5b",
    },
    {
      id: 4,
      text: "JOB JOKES",
      bg: "#ffdf5b",
    },
    {
      id: 5,
      text: "BIRTHDAY JOKES",
      bg: "#8fe460",
    },
    {
      id: 6,
      text: "SOCIAL JOKES",
      bg: "#57e690",
    },

    {
      id: 7,
      text: "PUNS",
      bg: "#57dbe6",
    },
    {
      id: 8,
      color: "#cfb995",
      text: "VIEW ALL",
      bg: "#cfb995",
    },
  ];
  return (
    <div className="button-group">
      {ButtonInfo.map((button) => (
        <ButtonSingle key={button.id} button={button}></ButtonSingle>
      ))}
    </div>
  );
};

export default ButtonGroup;
