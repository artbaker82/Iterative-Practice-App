import React, { Fragment } from "react";
import PracticeLists from "../PracticeLists/PracticeLists";
import PracticeItems from "../PracticeItems/PracticeItems";
import "./DashBoard.css";
import { Col, Row } from "reactstrap";

const DashBoard = ({
  practiceItems,
  practiceLists,
  handleNewItem,
  handleNewList,
  handleSelect,
  handleTimer,
}) => {
  return (
    <Fragment>
      <div className="main-wrapper">
        <div className="list-wrapper">
          <PracticeLists
            // practiceList={practiceList}
            // setPracticeList={setPracticeList}
            // practiceItems={practiceItems}
            // setPracticeItems={setPracticeItems}
            practiceItems={practiceItems}
            practiceLists={practiceLists}
            handleNewList={handleNewList}
            handleSelect={handleSelect}
            handleTimer={handleTimer}
          />
        </div>
        <Row>
          <Col xs={6} lg={4} className="items-list-wrapper">
            <div>
              <PracticeItems practiceItems={practiceItems} handleNewItem={handleNewItem} />
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default DashBoard;
