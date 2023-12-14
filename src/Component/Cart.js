import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Css/Addcart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [paymetcart, setPaymentcart] = useState([]);
  const [total, setTotal] = useState();
  const Nvigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://mern-backend-o0hb.onrender.com/api/addgetcart")
      .then((res) => {
        setPaymentcart(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  useEffect(() => {
    let pricetotal = 0;
    paymetcart.map((item) => (pricetotal += item.price));
    setTotal(pricetotal);
  }, [paymetcart]);

  const Payment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OFfDcSFuYPQ8NkkiTz5ftHV4vxynOQ1qBrVphWeG7zUdAdr0biKAWFhLRGZfedGDI96o3QL1qhPfv6M8J5nkwrr00E5cXKqKc"
    );

    const body = {
      products: paymetcart,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "https://mern-backend-o0hb.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    await axios.post(
      "https://mern-backend-o0hb.onrender.com/api/addlearn",
      paymetcart
    );

    await axios.delete("https://mern-backend-o0hb.onrender.com/api/delete");

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  const removehandle = async (itemid) => {
    await axios.post("https://mern-backend-o0hb.onrender.com/api/deletecart", {
      id: itemid,
    });
    Nvigate(-1);
    alert("Your cart item has been removed");
  };

  return (
    <div>
      {paymetcart.length === 0 ? (
        <div>
          {" "}
          
          <img  className="dataemptytwo"  alt="Not Found" src="https://i.pinimg.com/originals/f8/56/7d/f8567d822bf5ec11f9bff3efbbac4c32.gif 
" />
        </div>
      ) : (
        <>
          {paymetcart.map((item) => (
            <div className="add_cart_container" key={item.id}>
              <div>
                <img src={item.img} alt="Not Found" className="adcart_image" />
              </div>
              <div className="adcart_dtl">
                <h2>{item.heading}</h2>
                <h3>{item.name}</h3>
                <h4>Price:₹{item.price}.00</h4>
                <h4>Rating:{item.rating}</h4>
                <button
                  className="remove_addcart"
                  onClick={() => removehandle(item.id)}
                >
                  Remove button
                </button>
              </div>
            </div>
          ))}
          <div className="ttotal">
            <h1 className="price_total">Total : ₹{total}.00</h1>
            <button className="checkout_btn" onClick={Payment}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
