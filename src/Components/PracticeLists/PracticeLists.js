import React, { Fragment } from "react";
import Item from "./Item/Item";
import "./PracticeLists.css";
import AddList from "./AddList/AddList";

const PracticeLists = ({ practiceList, setPracticeList, setPracticeItems, practiceItems }) => {
  return (
    <Fragment>
      <div className="main-list-wrapper">
        <h2>Top Practice Lists</h2>
        <div className="list-container">
          {practiceList.map((item) => {
            return <Item item={item} />;
          })}
          <AddList practiceItems={practiceItems} />
        </div>
      </div>
    </Fragment>
  );
};

export default PracticeLists;
