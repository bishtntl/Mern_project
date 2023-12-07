import axios from "axios";
import React, { useEffect, useState } from "react";

function LearCart() {
    const[Learn,setLearn]=useState([])
  useEffect(() => {
    axios.get("http://localhost:4500/api/getlearn")
    .then((res)=>setLearn(res.data))
    .catch((err)=>console.log(err,"error"))
  },[]);
  return(
<div>
  {Learn.map((item)=>{
    return(
        <>
        <h1>{item.name}</h1>
        <h1>{item.rating}</h1>
        <h1>{item.heading}</h1>
        <img src={item.img} alt="Not Found"/>
        </>
    )
  })}
</div>
  ) 
}

export default LearCart;
