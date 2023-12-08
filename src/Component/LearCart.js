import axios from "axios";
import "../Css/Learn.css";
import React, { useEffect, useState } from "react";

function LearCart() {
  const [Learn, setLearn] = useState([]);
  useEffect(() => {
    axios
      .get("https://mern-backend-o0hb.onrender.com/api/getlearn")
      .then((res) => setLearn(res.data))
      .catch((err) => console.log(err, "error"));
  }, []);
  return (
    <div className="learn_container">
      {Learn.map((item) => {
        return (
          < div className="learn_container_under_div">
            <div className="learn_container_image_container">
              <img
                className="learn_container_image"
                src={item.img}
                alt="Not Found"
              />
            </div>
            <div className="learn_container_dtl">
              <h1>{item.heading}</h1>
              <h1>{item.rating}</h1>
              <h5>{item.name}</h5>
              <p>{item.time}</p>
              <p>{item.totalhour}</p>
            </div>
            
          </ div>
        );
      })}
     
    </div>
    

  );
}

export default LearCart;
