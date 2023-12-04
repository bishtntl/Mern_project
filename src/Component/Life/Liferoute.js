import { NavLink } from "react-router-dom";
import React from "react";
import "./css/Liferoute.css";

const LifeRouter = () => {
  return (
    <>
      <div className="developmentNav">
        <span className="developroute">
          <NavLink to="/life">LifeStyle</NavLink>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span>
          <NavLink to="/life/art/craft">Art Crafts</NavLink>
        </span>
        <span>
          <NavLink to="/life/beauty">Beauty &  Makeup</NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/life/pet/craft">Pet Care & Training</NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/life/food/bevrage"> Food &Bevrage</NavLink>
        </span>
        <span>
          <NavLink to="/life/travel">Travel</NavLink>
        </span>
      </div>
    </>
  );
};
export default LifeRouter;
