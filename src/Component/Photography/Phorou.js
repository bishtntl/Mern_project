import { NavLink } from "react-router-dom";
import React from "react";
// import axios from "axios";
import "./css/Route.css";
// import "./Webdevelop.css"
// import "./Development.css"
const PhotographyRouter = () => {
  return (
    <>
      <div className="developmentNav">
        <span className="developroute">
          <NavLink to="/photography">Photography & Video</NavLink>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <span>
          <NavLink to="/photography/Digital">Digital Photography</NavLink>
        </span>
        <span>
          <NavLink to="/photography/photography">   Photography</NavLink>
        </span>
        <span>
          {" "}
          <NavLink to="/photography/video/design"> Video Design</NavLink>
        </span>
        <span>
      
          {" "}
          <NavLink to="/photography/tools">
            {" "}
          Photography Tools
          </NavLink>
        </span>
        <span>
          <NavLink to="/photography/Commercial">  Commercial Photography</NavLink>
        </span>
      </div>
    </>
  );
};
export default PhotographyRouter;
