import React from "react";
// import classes from "./Header.module.css";
import CartButton from "./CartButton";

function Header(props) {
  return (
    <div>
      <h1>Medicine Store</h1>
      <CartButton onClick={props.onClick}></CartButton>
    </div>
  );
}

export default Header;
