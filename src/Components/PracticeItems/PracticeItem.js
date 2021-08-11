import React from "react";
import "./css/PracticeItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import HeartComponent from "../HeartComponent/HeartComponent";
const PracticeItem = ({ item }) => {
  const renderHeart = () => {
    let prefix = "far";
    prefix = item.liked ? "fas" : "far";
    return prefix;
  };

  const HeartComponent = () => {
    return (
      <FontAwesomeIcon
        // onClick={() => onHeartClick(item)}
        icon={[renderHeart(), "heart"]}
        style={{ margin: "0 0 0 0.7rem", alignSelf: "center" }}
      ></FontAwesomeIcon>
    );
  };

  return (
    <div>
      <span className="practice-item-wrapper">
        <HeartComponent />

        <span className="item-title">{item.title}</span>
      </span>
    </div>
  );
};

export default PracticeItem;
