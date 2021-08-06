import React, { Fragment } from "react";
import PracticeLists from "../PracticeLists/PracticeLists";
import "./DashBoard.css";
const DashBoard = ({ practiceList, setPracticeList, inputText, setInputText }) => {
  return (
    <Fragment>
      <div className="main-wrapper">
        <PracticeLists
          practiceList={practiceList}
          setPracticeList={setPracticeList}
          inputText={inputText}
          setInputText={setInputText}
        />
      </div>
    </Fragment>
  );
};

export default DashBoard;
