import React from "react";
import classes from "./Cart.module.css";

function CartItem(props) {
  return (
    <div className={classes["cart-items"]}>
      <h1>{props.e.name}</h1>
      <h1>{`${props.e.amount} X ${props.e.price}`}</h1>
    </div>
  );
}

export default CartItem;
