import React, { useState, useContext } from "react";
import DataContext from "../../store/data-context";

function NewMedicine() {
  const ctx = useContext(DataContext);
  const [enteredName, setEnteredName] = useState("");
  const [enteredDiscription, setEnteredDiscription] = useState("");
  const [enteredPrice, setEnteredPriceHandler] = useState("");
  function nameChangeHandler(e) {
    e.preventDefault();
    setEnteredName(e.target.value);
  }
  function discriptionChangeHandler(e) {
    e.preventDefault();
    setEnteredDiscription(e.target.value);
  }
  function priceChangeHandler(e) {
    e.preventDefault();
    setEnteredPriceHandler(e.target.value);
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    ctx.onSubmit(enteredName, enteredDiscription, enteredPrice);
    setEnteredName("");
    setEnteredDiscription("");
    setEnteredPriceHandler("");
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Medicine Name :</label>
      <input
        value={enteredName}
        type="text"
        onChange={nameChangeHandler}
      ></input>
      <label>Discription :</label>
      <input
        value={enteredDiscription}
        type="text"
        onChange={discriptionChangeHandler}
      ></input>
      <label>Price :</label>
      <input
        value={enteredPrice}
        type="text"
        onChange={priceChangeHandler}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default NewMedicine;
