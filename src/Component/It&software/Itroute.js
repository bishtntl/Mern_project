import { NavLink } from "react-router-dom";
import React from "react";
import "./css/Itrou.css";
const Itrouter = () => {
  return (
    <>
      <div className="developmentNav">
        <span className="developroute">
          <NavLink to="/it/software">It& Software</NavLink>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span>
          <NavLink to="/it/certificate">It Certification</NavLink>
        </span>
        <span>
          <NavLink to="/it/Network"> Network & Security </NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/it/hardware">Hardware </NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/it/oprating/system"> Oprating System & Server</NavLink>
        </span>
        <span>
          <NavLink to="/it/other"> Other It & Software</NavLink>
        </span>
      </div>
    </>
  );
};
export default Itrouter;
