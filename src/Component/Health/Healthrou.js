import { NavLink } from "react-router-dom";
import React from "react";
// import axios from "axios";
import "./css/Healt.css";
// import "./Webdevelop.css"
// import "./Development.css"
const HealthRouter = () => {
  return (
    <>
      <div className="developmentNav">
        <span className="developroute">
          <NavLink to="/health">Health & Fitness</NavLink>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span>
          <NavLink to="/health/fitness">Fitness</NavLink>
        </span>
        <span>
          <NavLink to="/health/yoga">Yoga</NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/health/sport">Sport</NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/health/mental"> Mental</NavLink>
        </span>
        <span>
          <NavLink to="/health/dance">Dance</NavLink>
        </span>
      </div>
    </>
  );
};
export default HealthRouter;
