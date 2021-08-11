import React, { useState, Fragment } from "react";
import "./Item.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
const Item = ({ item }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <div className="item-wrapper" onClick={toggle}>
        <div className=" item item-name">{item.name}</div>
        <div className=" item item-info">Last Practiced: {item.lastPracticed}</div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{item.name}</ModalHeader>
        <ModalBody>
          <div>
            <span>Pieces: {item.items.join(", ")}</span>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default Item;
