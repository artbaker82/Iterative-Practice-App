import React from "react";
import "./css/PracticeItem.css";
import HeartComponent from "../HeartComponent/HeartComponent";
const PracticeItem = ({ item, setPracticeItems }) => {
  return (
    <div>
      <span className="practice-item-wrapper">
        <HeartComponent setPracticeItems={setPracticeItems} item={item} />

        <span className="item-title">{item.title}</span>
      </span>
    </div>
  );
};

export default PracticeItem;
