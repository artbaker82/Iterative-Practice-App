import React, { useState, Fragment } from "react";
import "./Item.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Item = ({ item, handleTimer }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const TimerSelector = (selectedItem) => {
    return (
      <div className="timer-wrapper-main">
        <FontAwesomeIcon
          onClick={() => handleTimer(selectedItem, "increase")} //passing in itemToChange, id of list, and action
          icon={["fas", "sort-up"]}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          onClick={() => handleTimer(selectedItem, "decrease")}
          icon={["fas", "sort-down"]}
        ></FontAwesomeIcon>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="item-wrapper" onClick={toggle}>
        <div className=" item item-name">{item.name}</div>
        <div className=" item item-info">Last Practiced: {item.lastPracticed}</div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{item.name}</ModalHeader>
        <ModalBody>
          <div className="modal-list-main-wrapper">
            <h3>Pieces</h3>
            {item.items.map((item) => {
              return (
                <span key={item.id} className="modal-list-item-wrapper">
                  {item.title}

                  <TimerSelector selectedItem={item} />
                  {`${item.timer} ${item.timer === 1 ? "minute" : "minutes"}`}
                </span>
              );
            })}
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
