import React, { useContext } from "react";
import MedicineItem from "./MedicineItem";
import DataContext from "../../store/data-context";

function Medicines() {
  const ctx = useContext(DataContext);
  const medi = (
    <ul>
      {ctx.medicinelist.map((e) => {
        return (
          <MedicineItem
            key={e.name}
            name={e.name}
            discription={e.discription}
            price={e.price}
          ></MedicineItem>
        );
      })}
    </ul>
  );
  return <div>{medi}</div>;
}

export default Medicines;
