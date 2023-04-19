import React, { useContext } from "react";
import DataContext from "../../store/data-context";

function Cart(props) {
  const ctx = useContext(DataContext);
  return (
    <button onClick={props.onClick}>
      Cart <h2>{ctx.noOfItems} </h2>
    </button>
  );
}

export default Cart;
