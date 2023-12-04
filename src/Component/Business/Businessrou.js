import { NavLink } from "react-router-dom";
import React from "react";
// import axios from "axios";
import "./csss/Route.css";
// import "./Webdevelop.css"
// import "./Development.css"
const BusinessRoute = () => {
  return (
    <>
      <div className="developmentNav">
        <span className="developroute">
          <NavLink to="/business">Buniess</NavLink>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span>
          <NavLink to="/business/communication">Communication</NavLink>
        </span>
        <span>
          <NavLink to="/business/management"> Management Design </NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/business/Stetegy"> Business Stetegy </NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/business/Oprations"> Oprations</NavLink>
        </span>
        <span>
          <NavLink to="/business/Human/Resources"> Human Resources</NavLink>
        </span>
      </div>
    </>
  );
};
export default BusinessRoute;
