import { NavLink } from "react-router-dom";
import React from "react";
// import axios from "axios";
import "./css/Routeteach.css";
// import "./Webdevelop.css"
// import "./Development.css"
const TeachRouter = () => {
  return (
    <>
      <div className="developmentNav">
        <span className="developroute">
          <NavLink to="/teaching">Teaching & Academics</NavLink>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span>
          <NavLink to="/teaching/Engneering">Engneering</NavLink>
        </span>
        <span>
          <NavLink to="/teaching/social/science">Socail Science</NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/teaching/Math">Math</NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/teaching/Science"> Science</NavLink>
        </span>
        <span>
          <NavLink to="/teaching/Teacher/Training">Teacher Training</NavLink>
        </span>
      </div>
    </>
  );
};
export default TeachRouter;
