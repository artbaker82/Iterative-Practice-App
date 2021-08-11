import React, { Fragment } from "react";
import Item from "./Item/Item";
import "./PracticeLists.css";
import AddList from "./AddList/AddList";
import PracticeItems from "../PracticeItems/PracticeItems";

const PracticeLists = ({ practiceList, setPracticeList, setPracticeItems, practiceItems }) => {
  const handleNewList = (title, e) => {
    e.preventDefault();
    setPracticeList([
      ...practiceList,
      {
        name: title,
        items: [practiceItems.filter((item) => item.selected)],
        created: new Date().toISOString(),
        lastPracticed: "1 day ago",
      },
    ]);

    setPracticeItems(
      practiceItems.map((item) => {
        return {
          ...item,
          selected: false,
        };
      })
    );
  };
  return (
    <Fragment>
      <div className="main-list-wrapper">
        <h2>Top Practice Lists</h2>
        <div className="list-container">
          {practiceList.map((item) => {
            return <Item item={item} />;
          })}
          <AddList
            practiceItems={practiceItems}
            setPracticeItems={setPracticeItems}
            handleNewList={handleNewList}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PracticeLists;
