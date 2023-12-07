import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {

    const[paymetcart,setPaymentcart]=useState([])


    useEffect(()=>{
        axios.get("http://localhost:4500/api/addgetcart")
        .then((res)=>{
            setPaymentcart(res.data)
        })
        .catch((err)=>{
            console.log(err,"error")
        })
    },[])
    const Payment = async ()=>{
        const stripe = await loadStripe("pk_test_51OFfDcSFuYPQ8NkkiTz5ftHV4vxynOQ1qBrVphWeG7zUdAdr0biKAWFhLRGZfedGDI96o3QL1qhPfv6M8J5nkwrr00E5cXKqKc");
        const body = {
          products: paymetcart
        }
        const headers = {
          "Content-Type":"application/json"
        }
        const response = await fetch("http://localhost:4500/api/create-checkout-session",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
        })
        await axios.post("http://localhost:4500/api/addlearn",paymetcart)
        await axios.delete("http://localhost:4500/api/deletecart")
        const session = await response.json();
        const result  = stripe.redirectToCheckout({
          sessionId:session.id
        });
        if(result.error){
          console.log(result.error);
        }
      }
  return (
    <div>
        {paymetcart.map((item)=>{
            return(
                <>
                <h1>{item.heading}</h1>
                <h1>{item.name}</h1>
                <h1>{item.price}</h1>
                <img src={item.img}/>
                </>
            )
        })}

        <button onClick={Payment}>checkout</button>
      
    </div>
  )
}

export default Cart
