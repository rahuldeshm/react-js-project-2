import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import DataContext from "../../store/data-context";

function Cart(props) {
  const ctx = useContext(DataContext);
  function ordering() {
    console.log("Ordering");
  }
  let price = 0;
  const cartitems = (
    <ul>
      {ctx.cartitemlist.map((e) => {
        price = price + parseInt(e.price) * parseInt(e.amount);
        return <CartItem key={e._id} e={e}></CartItem>;
      })}
    </ul>
  );
  return (
    <Modal onClick={props.onClick}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{price}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick}>Close</button>
        <button onClick={ordering}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
