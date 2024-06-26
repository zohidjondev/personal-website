import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to={"/"}>
            Zohidjon Ma'rufov
          </Link>
        </div>
        <div className="links">
          <Link to={'/blog'} className="link">Blog</Link>
          <Link to={'/aboutme'} className="link">About Me</Link>
          <span>Zohidjon</span>
          <span className="button"  >Logout</span>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
