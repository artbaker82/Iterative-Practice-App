import React, { Fragment, useState } from "react";
import Item from "./Item/Item";
import "./PracticeLists.css";
import AddList from "./AddList/AddList";

const PracticeLists = ({ practiceList, setPracticeList, setPracticeItems, practiceItems }) => {
  const handleNewList = (title, e) => {
    e.preventDefault();
    setPracticeList([
      ...practiceList,
      {
        name: title,
        items: practiceItems.filter((item) => item.selected),
        created: new Date().toISOString(),
        lastPracticed: "1 day ago",
        id: Math.floor(Math.random() * 1000),
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

  const handleTimer = (itemToChange, listToChange, action) => {
    console.log(itemToChange, listToChange, action);
    let newTime = itemToChange.timer + 1;
    console.log(newTime);
    setPracticeItems(
      practiceItems.map((item) => {
        if (item.id === itemToChange.id) {
          return {
            ...item,
            timer: newTime,
          };
        }
        return item;
      })
    );
  };
  return (
    <Fragment>
      <div className="main-list-wrapper">
        <h2>Top Practice Lists</h2>
        <div className="list-container">
          {practiceList.map((item) => {
            return <Item item={item} handleTimer={handleTimer} />;
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
