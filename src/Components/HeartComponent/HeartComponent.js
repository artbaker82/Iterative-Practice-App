import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as fasHeart } from "@fortawesome/free-regular-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
const renderHeart = (item) => {
  let prefix = "far";
  prefix = item.liked ? "fas" : "far";
  return prefix;
};
const HeartComponent = ({ item }) => {
  return (
    <FontAwesomeIcon
      // onClick={() => onHeartClick(item)}
      icon={[renderHeart(item), "heart"]}
      style={{ margin: "0 0 0 0.7rem", alignSelf: "center" }}
    ></FontAwesomeIcon>
  );
};

export default HeartComponent;
