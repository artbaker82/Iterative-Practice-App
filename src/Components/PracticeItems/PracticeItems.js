import React, { Fragment } from "react";
import PracticeItem from "./PracticeItem";
import "./css/PracticeItems.css";
import AddNewItem from "./AddNewItem";
const PracticeItems = ({ practiceItems, setPracticeItems }) => {
  const onHeartClick = (clickedItem) => {
    console.log(clickedItem);
    setPracticeItems(
      practiceItems.map((item) => {
        if (item.id === clickedItem.id) {
          return {
            ...item,
            liked: !item.liked,
          };
        }
        return item;
      })
    );
  };

  return (
    <Fragment>
      <h2>Practice Items</h2>
      <div>
        {practiceItems.map((item) => {
          return <PracticeItem item={item} setPracticeItems={onHeartClick} />;
        })}
      </div>

      <AddNewItem practiceItems={practiceItems} setPracticeItems={setPracticeItems} />
    </Fragment>
  );
};

export default PracticeItems;
