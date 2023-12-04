import { NavLink } from "react-router-dom";
import React from "react";
// import axios from "axios";
import "./css/Finnceroute.css";
// import "./Webdevelop.css"
// import "./Development.css"
const FinanceRoute = () => {
  return (
    <>
      <div className="developmentNav">
        <span className="developroute">
          <NavLink to="/finance">Finance & Accounting</NavLink>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span>
          <NavLink to="/finance/Book/Keeping">Accounting & Book Keeping</NavLink>
        </span>
        <span>
          <NavLink to="/finance/Compliance"> Compliance </NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/finance/Economics">Economics </NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/finance/Finance"> Finance</NavLink>
        </span>
        <span>
          <NavLink to="/finance/taxes"> Taxes</NavLink>
        </span>
      </div>
    </>
  );
};
export default FinanceRoute;
