import React, { useContext } from "react";
import classes from "./Medicines.module.css";
import DataContext from "../../store/data-context";

function MedicineItem(props) {
  const ctx = useContext(DataContext);
  function addHandler() {
    ctx.onAdd({
      name: props.name,
      discription: props.discription,
      price: props.price,
      amount: 1,
    });
  }
  return (
    <div className={classes.medicine}>
      <h3>{props.name}</h3>
      <p>{props.discription}</p>
      <h3>{props.price}</h3>
      <h3>1</h3>
      <button onClick={addHandler}>Add to Cart</button>
    </div>
  );
}

export default MedicineItem;
