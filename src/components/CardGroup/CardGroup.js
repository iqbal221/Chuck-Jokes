import React, { useEffect, useState } from "react";
import CardSingle from "../CardSingle/CardSingle";
import "./CardGroup.css";

const CardGroup = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/search?query=all")
      .then((res) => res.json())
      .then((data) => setJokes(data.result));
  }, []);

  return (
    <div className="card-group">
      {jokes.map((joke) => (
        <CardSingle joke={joke}></CardSingle>
      ))}
    </div>
  );
};

export default CardGroup;
