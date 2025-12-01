import { useState, useEffect } from "react";
import itemsContext from "./items-context";
import api from "../api/itemsData";

const ItemsProvider = (props) => {
  const [itemsData, setItemsData] = useState([]);
  const [switchPage, setSwitchPage] = useState("User");

  //retrieveItemsData

  const retrieveItemsData = async () => {
    const response = await api.get("/");
    return response.data;
  };




  // const addNewItemHandler = (item) => {
  //   setItemsData(prev => [...prev, item]);
  //   console.log(item);
  // };

  //postItemsData

  const addNewItemHandler = async (formData, index) => {
    const request = {
      id: index,
      ...formData,
    }
    const response = await api.post("/", request);
    setItemsData([...itemsData, response.data]);
    console.log(response.data)
  };


  const removeItemHandler = async (id) => {
    await api.delete(`/${id}`);
    const filteredItems = itemsData.filter((item) => item.id !== id)
    setItemsData(filteredItems)
  };

  const updateItemHandler = (id, updatedItem) => {
    setItemsData(prev =>
      prev.map(item => item.id === id ? updatedItem : item)
    );
  };

  const togglePageHandler = () => {
    setSwitchPage(prev => prev === "User" ? "Admin" : "User");
  };

  const itemsDataHandler = (itemsData) => {
    setItemsData(itemsData);
  };

  const contextValue = {
    itemsData: itemsData,
    setItemsData: setItemsData,
    switchPage: switchPage,
    addNewItem: addNewItemHandler,
    removeItem: removeItemHandler,
    updateItem: updateItemHandler,
    togglePage: togglePageHandler,
    retrieveItemsData: retrieveItemsData,
  };

  return (
    <itemsContext.Provider value={contextValue}>
      {props.children}
    </itemsContext.Provider>
  );
};

export default ItemsProvider;
