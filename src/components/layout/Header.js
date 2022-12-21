import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui compact menu">
      <Link to='/' className="item">
        <i className="home icon"></i>
        Notes
      </Link>
      <Link to='/notes/new' className="item">
        <i className="plus icon"></i>
        New
      </Link>
    </div>
  );
};
export default Header;
