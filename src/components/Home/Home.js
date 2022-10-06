import React from "react";
import Navbar from "../Navbar/Navbar";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import CardGroup from "../CardGroup/CardGroup";
import Header from "../Header/Header";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Footer/Footer";

const Home = () => {
  const [search, setSearch] = useState("");
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/search?query=All`)
      .then((res) => res.json())
      .then((data) => setJokes(data?.result));
  }, []);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${search}`)
      .then((res) => res.json())
      .then((data) => setJokes(data?.result));
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(jokes);

  return (
    <div>
      <Navbar></Navbar>
      <Header handleSearch={handleSearch}></Header>
      <div className="main-container">
        <ButtonGroup></ButtonGroup>
        <hr />
        <CardGroup jokes={jokes}></CardGroup>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
