import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Collapse, Card, CardBody, Button } from "reactstrap";

const AddList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Fragment>
      <FontAwesomeIcon
        onClick={toggle}
        icon={faPlus}
        size="3x"
        style={{ color: "#2A9D8F", alignSelf: "center" }}
      />
      <Collapse isOpen={isOpen}>
        <div className="form-wrapper">change this to modal open to create new list</div>
      </Collapse>
    </Fragment>
  );
};

export default AddList;
