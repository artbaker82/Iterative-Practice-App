import React, { Fragment } from "react";
import PracticeItem from "./PracticeItem";
import "./css/PracticeItems.css";
import AddNewItem from "./AddNewItem";
const PracticeItems = ({ practiceItems, handleNewItem }) => {
  // const onHeartClick = (clickedItem) => {
  //   console.log(clickedItem);
  //   setPracticeItems(
  //     practiceItems.map((item) => {
  //       if (item.id === clickedItem.id) {
  //         return {
  //           ...item,
  //           liked: !item.liked,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };

  return (
    <Fragment>
      <h2>Practice Items</h2>
      <div>
        {practiceItems.map((item) => {
          return <PracticeItem key={item.id} item={item} />;
        })}
      </div>

      <AddNewItem handleNewItem={handleNewItem} />
    </Fragment>
  );
};

export default PracticeItems;
