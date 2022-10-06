import React from "react";
import "./Header.css";

const Header = ({ handleSearch }) => {
  return (
    <header className="header-img">
      <div>
        <h1>The Joke Bible</h1>
        <p>Daily Laughs for you and yours </p>
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="How can we make you laugh today?"
        />
      </div>
    </header>
  );
};

export default Header;
