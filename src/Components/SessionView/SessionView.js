import React, { useState, Fragment } from "react";
import { useLocation } from "react-router";
import ItemsList from "./SessionComponents/ItemsList/ItemsList";
import Timer from "./SessionComponents/Timer/Timer";
import "./SessionView.css";

const SessionView = () => {
  const location = useLocation();
  const { list } = location.state;

  const [itemsToPractice, setItemsToPractice] = useState(list);

  //create new local state or add new properties to existing state?
  //does modifying itemsToPracice also modify list from location.state? I do not think so

  return (
    <Fragment>
      <div className="sessionViewWrapper">
        <div className="item-list-wrapper">
          <ItemsList list={list} />
        </div>
        <div className="timer-components-wrapper">
          <Timer queue={list.items} />
        </div>
      </div>
    </Fragment>
  );
};

export default SessionView;
