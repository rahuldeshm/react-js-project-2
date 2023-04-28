import React, { useEffect, useState } from "react";

export const DataContextProvider = (props) => {
  const [medicinelist, setMedicineList] = useState([]);
  const [noOfItems, setNoOfItems] = useState(0);
  const [cartitemlist, setCartItemList] = useState([]);
  const [inCartList, setCartItemId] = useState([]);

  function fetchdata() {
    fetch(
      "https://crudcrud.com/api/dec9efa936f94f2ba169d8412b43d8f5/products",
      {
        method: "GET",
        headers: {
          "Content-Type": " application/problem+json",
        },
      }
    ).then((res) => {
      res.json().then((data) => setMedicineList(data));
      fetch("https://crudcrud.com/api/dec9efa936f94f2ba169d8412b43d8f5/cart", {
        method: "GET",
        headers: {
          "Content-Type": " application/problem+json",
        },
      }).then((res) => {
        res.json().then((data) => {
          let no = 0;
          const ar = data.map((item) => {
            no = no + item.amount;
            return item.name;
          });

          setCartItemList(data);
          setCartItemId(ar);
          setNoOfItems(no);
        });
      });
    });
  }

  useEffect(fetchdata, []);
  const onAdd = (item) => {
    if (inCartList.indexOf(item.name) !== -1) {
      const list = [...cartitemlist];
      list[inCartList.indexOf(item.name)].amount += 1;
      setCartItemList(list);
    } else {
      fetch("https://crudcrud.com/api/dec9efa936f94f2ba169d8412b43d8f5/cart", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": " application/problem+json",
        },
      }).then((res) => {
        res.json().then((data) => {
          let ditem = { ...item };
          ditem["_id"] = data._id;
          setCartItemId([...inCartList, ditem.name]);
          setCartItemList([...cartitemlist, ditem]);
        });
      });
    }

    setNoOfItems(noOfItems + parseInt(item.amount));
  };

  function onSubmit(name, discription, price) {
    fetch(
      "https://crudcrud.com/api/dec9efa936f94f2ba169d8412b43d8f5/products",
      {
        method: "POST",
        body: JSON.stringify({ name, discription, price }),
        headers: {
          "Content-Type": " application/problem+json",
        },
      }
    ).then((res) => {
      setMedicineList([...medicinelist, { name, discription, price }]);
    });
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
