import { useState } from "react";
import itemsContext from "./items-context";

const ItemsProvider = (props) => {
  const [items, setItems] = useState([]);
  const [switchPage, setSwitchPage] = useState("User");


  const addNewItemHandler = (item) => {
    setItems(prev => [...prev, item]);
  };

  const removeItemHandler = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItemHandler = (id, updatedItem) => {
    setItems(prev =>
      prev.map(item => item.id === id ? updatedItem : item)
    );
  };

  const togglePageHandler = () => {
    setSwitchPage(prev => prev === "User" ? "Admin" : "User");
  };
  

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const contextValue = {
    itemsData: items,
    switchPage: switchPage,
    addNewItem: addNewItemHandler,
    removeItem: removeItemHandler,
    updateItem: updateItemHandler,
    togglePage: togglePageHandler,
    totalItems: totalItems,
  };

  return (
    <itemsContext.Provider value={contextValue}>
      {props.children}
    </itemsContext.Provider>
  );
};

export default ItemsProvider;
