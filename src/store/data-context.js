import React, { useState } from "react";

export const DataContextProvider = (props) => {
  const [medicinelist, setMedicineList] = useState([
    { name: "dolo", discription: "for fever", price: 10 },
  ]);
  const [noOfItems, setNoOfItems] = useState(0);
  const [cartitemlist, setCartItemList] = useState([]);
  const [inCartList, setCartItemId] = useState([]);

  const onAdd = (item) => {
    if (inCartList.indexOf(item.name) !== -1) {
      const list = [...cartitemlist];
      list[inCartList.indexOf(item.name)].amount += 1;
      setCartItemList(list);
    } else {
      setCartItemId([...inCartList, item.name]);
      setCartItemList([...cartitemlist, item]);
    }

    setNoOfItems(noOfItems + parseInt(item.amount));
  };

  function onSubmit(name, discription, price) {
    setMedicineList([...medicinelist, { name, discription, price }]);
  }
  return (
    <DataContext.Provider
      value={{
        onAdd: onAdd,
        cartitemlist: cartitemlist,
        noOfItems: noOfItems,
        onSubmit: onSubmit,
        medicinelist: medicinelist,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
const DataContext = React.createContext({
  onAdd: () => {},
  onSubmit: () => {},
  cartitemlist: [],
  medicinelist: [],
  noOfItems: 0,
});

export default DataContext;
