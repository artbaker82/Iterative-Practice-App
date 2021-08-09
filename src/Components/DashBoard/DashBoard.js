import React, { Fragment } from "react";
import PracticeLists from "../PracticeLists/PracticeLists";
import PracticeItems from "../PracticeItems/PracticeItems";
import "./DashBoard.css";
import { Col, Row } from "reactstrap";
const DashBoard = ({
  practiceList,
  setPracticeList,
  inputText,
  setInputText,
  practiceItems,
  setPracticeItems,
}) => {
  return (
    <Fragment>
      <div className="main-wrapper">
        <div className="list-wrapper">
          <PracticeLists
            practiceList={practiceList}
            setPracticeList={setPracticeList}
            inputText={inputText}
            setInputText={setInputText}
          />
        </div>
        <Row>
          <Col xs={6} lg={4} className="items-list-wrapper">
            <div>
              <PracticeItems practiceItems={practiceItems} setPracticeItems={setPracticeItems} />
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default DashBoard;
