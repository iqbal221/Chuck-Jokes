import React, { useState } from "react";
import "./ButtonGroup.css";
import ButtonSingle from "../ButtonSingle/ButtonSingle";

const ButtonGroup = ({ jokes }) => {
  return (
    <div className="button-group">
      <ButtonSingle text="ADULT JOKES" background="#ff5b5b"></ButtonSingle>
      <ButtonSingle text="DAD JOKES" background="#ff915b"></ButtonSingle>
      <ButtonSingle text="CHRISTMAS JOKES" background="#ffbe5b"></ButtonSingle>
      <ButtonSingle text="JOB JOKES" background="#ffdf5b"></ButtonSingle>
      <ButtonSingle text="BIRTHDAY JOKES" background="#8fe460"></ButtonSingle>
      <ButtonSingle text="BIRTHDAY JOKES" background="#57e690"></ButtonSingle>
      <ButtonSingle text="PUNS" background="#57dbe6"></ButtonSingle>
      <ButtonSingle text="VIEW ALL" background="#cfb995"></ButtonSingle>
    </div>
  );
};

export default ButtonGroup;
