import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-img">
      <div>
        <h1>The Joke Bible</h1>
        <p>Daily Laughs for you and yours </p>
        <input type="text" placeholder="How can we make you laugh today?" />
      </div>
    </header>
  );
};

export default Header;
