import React from "react";
import { Link } from "react-router-dom"; // Link tag must be inside a BrowserRouter Tag to avoid errors, Link is better the a tag because and we need to use it in react

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streams
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </div>
  );
};

export default Header;
