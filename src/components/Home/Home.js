import React from "react";
import Navbar from "../Navbar/Navbar";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import CardGroup from "../CardGroup/CardGroup";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="main-container">
        <ButtonGroup></ButtonGroup>
        <hr />
        <CardGroup></CardGroup>
      </div>
    </div>
  );
};

export default Home;
