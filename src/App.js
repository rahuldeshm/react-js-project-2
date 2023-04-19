import "./App.css";
import { DataContextProvider } from "./store/data-context";
import React, { useState } from "react";
import Header from "./components/Cart/Header";
import Cart from "./components/Cart/Cart";
import Medicines from "./components/Medicines/Medicines";
import NewMedicine from "./components/NewMedicine/NewMedicine";

function App() {
  const [cart, showCart] = useState(false);
  const oncloseHandler = () => {
    showCart(false);
  };
  const onOpenHandler = () => {
    showCart(true);
  };
  return (
    <DataContextProvider>
      <div className="App">
        <Header onClick={onOpenHandler}></Header>
        {cart && <Cart onClick={oncloseHandler}></Cart>}
        <NewMedicine></NewMedicine>
        <Medicines></Medicines>
      </div>
    </DataContextProvider>
  );
}

export default App;
