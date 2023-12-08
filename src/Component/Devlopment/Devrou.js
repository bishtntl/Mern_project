import { NavLink } from "react-router-dom";
import React from "react";
import "./Cssrou/Route.css";
const DevelopmentRoute = () => {
  return (
    <>
      <div className="developmentNav">
        <span className="developroute">
          <NavLink to="/design">Design</NavLink>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span>
          <NavLink to="/design/webdesign">web Design</NavLink>
        </span>
        <span>
          <NavLink to="/design/gamedesign">   Game Design</NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/design/animation">     3D & Animation</NavLink>
        </span>
        <span>
      
          {" "}
          <NavLink to="/design/fashion/design">
            {" "}
            Fashion Design
          </NavLink>
        </span>
        <span>
          <NavLink to="/design/other/design">  Other Design</NavLink>
        </span>
      </div>
    </>
  );
};
export default DevelopmentRoute;
