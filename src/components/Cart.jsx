import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../App";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(cartContext);

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc + parseInt(curr.price),0))
  },[cart])
  return (
    <>
      <div className="cart-container container">
        {cart.map((item) => (
          <div className="cart-product">
            <div className="cart-img">
              <img src={item.img} alt="image" />
            </div>
            <div className="cart-product-details">
              <p style={{fontWeight:"600"}}>{item.title}</p>
              <p>{item.author}</p>
              <p>Price :${item.price}</p>
            </div>
          </div>
        ))}

        <h2 style={{marginBottom:"50px" ,marginTop:"20px ",paddingLeft:"20px"}}>Total Amount : ${total}</h2>
      </div>
    </>
  );
};

export default Cart;
