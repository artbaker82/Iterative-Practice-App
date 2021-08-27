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
        <ItemsList list={list} />
        <Timer queue={list.items} />
      </div>
    </Fragment>
  );
};

export default SessionView;
