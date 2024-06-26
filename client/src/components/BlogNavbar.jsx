import React from "react";
import { Link } from "react-router-dom";

const BlogNavbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo link"><Link className="link" to={'/'}>Zohidjon Ma'rufov</Link></div>
        <div className="links">
          <span>Zohidjon</span>
          <span className="button" >Logout</span>
          <span className="write">
            <Link className="link " to={"/write"}>
              Write
            </Link>
          </span>
        </div>
      </div>
      <div className="categories">
        <div className="links">
          <Link className="link" to={"/?cat=html"}>
            <h6>HTML</h6>
          </Link>
          <Link className="link" to={"/?cat=css"}>
            <h6>CSS</h6>
          </Link>
          <Link className="link" to={"/?cat=javascript"}>
            <h6>JavaScript</h6>
          </Link>
          <Link className="link" to={"/?cat=nodejs"}>
            <h6>NodeJs</h6>
          </Link>
          <Link className="link" to={"/?cat=reactjs"}>
            <h6>ReactJs</h6>
          </Link>
          <Link className="link" to={"/?cat=mysql"}>
            <h6>MySQL</h6>
          </Link>
          <Link className="link" to={"/?cat=mongodb"}>
            <h6>MongoDB</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogNavbar;
