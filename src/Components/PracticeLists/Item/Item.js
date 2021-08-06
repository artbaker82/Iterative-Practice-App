import React from "react";
import "./Item.css";
const Item = ({ item }) => {
  return (
    <div className="item-wrapper">
      <div className=" item item-name">{item.name}</div>
      <div className=" item item-info">Last Practiced: {item.lastPracticed}</div>
    </div>
  );
};

export default Item;
