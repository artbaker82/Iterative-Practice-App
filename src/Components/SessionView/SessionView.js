import React, { useState, Fragment } from "react";
import { useLocation } from "react-router";
import ItemsList from "./SessionComponents/ItemsList/ItemsList";
import Timer from "./SessionComponents/Timer/Timer";
import "./SessionView.css";

const SessionView = () => {
  const location = useLocation();
  const { list } = location.state;
  const [itemsToPractice, setItemsToPractice] = useState(list);
  const [currentItem, setCurrentItem] = useState("");
  //create new local state or add new properties to existing state?
  //does modifying itemsToPracice also modify list from location.state? I do not think so

  const startSession = () => {
    if (itemsToPractice.items.length >= 1) {
      const currentItem = itemsToPractice.items[0];
      setCurrentItem(currentItem);
    } else {
      setCurrentItem(null);
    }
    console.log(currentItem);
  };

  return (
    <Fragment>
      <div className="sessionViewWrapper">
        <ItemsList list={itemsToPractice} />
        <Timer currentItem={currentItem} startSession={startSession} />
      </div>
    </Fragment>
  );
};

export default SessionView;
