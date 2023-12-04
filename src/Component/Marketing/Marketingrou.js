import { NavLink } from "react-router-dom";
import React from "react";
// import axios from "axios";
import "./css/Marketing.css";
// import "./Webdevelop.css"
// import "./Development.css"
const Marketingrouter = () => {
  return (
    <>
      <div className="developmentNav">
        <span className="developroute">
          <NavLink to="/marketing">Marketing</NavLink>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span>
          <NavLink to="/marketing/digital">Digital Marketing</NavLink>
        </span>
        <span>
          <NavLink to="/marketing/content">Content Marketing </NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/marketing/social"> Social Media Marketing</NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/marketing/public"> Public Relationship</NavLink>
        </span>
        <span>
          <NavLink to="/marketing/product"> Product Marketing</NavLink>
        </span>
      </div>
    </>
  );
};
export default Marketingrouter;
