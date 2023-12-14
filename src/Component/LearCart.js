import axios from "axios";
import "../Css/Learn.css";
import React, { useEffect, useState } from "react";

function LearCart() {
  const [Learn, setLearn] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://mern-backend-o0hb.onrender.com/api/getlearn")
      .then((res) => {
        setLearn(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "error");
        setLoading(false);
      });
  }, []);
  return (
    <div className="learn_container">
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : Learn.length === 0 ? (
        <>
          <div  className="dataempty">
            {" "}
            {/* <img src="https://codehap.com/images/empty_cart.jpeg"  alt="Not Found"/>
            <img src="http://www.carezips.com/images/empty_cart.png"  alt="Not Found"/> */}
            <img
             
              src="https://assets-v2.lottiefiles.com/a/7b264970-1167-11ee-813e-fb3408905ffd/cBuAtbkfQC.gif"
              alt="Not Found"
            />
          </div>
        </>
      ) : (
        Learn.map((item) => (
          <div className="learn_container_under_div" key={item.id}>
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
          </div>
        ))
      )}
    </div>
  );
}

export default LearCart;
