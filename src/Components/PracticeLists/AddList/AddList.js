import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddList.css";

import { Modal, Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const AddList = ({ practiceItems, setPracticeItems }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const handleSelect = (selectedItem) => {
    console.log(selectedItem);
  };

  return (
    <Fragment>
      <FontAwesomeIcon
        onClick={toggle}
        icon={faPlus}
        size="3x"
        style={{ color: "#2A9D8F", alignSelf: "center" }}
      />

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <div className="add-list-container">
            {practiceItems.map((item) => {
              return (
                <div onClick={() => handleSelect(item)} className="add-list-item-wrapper">
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default AddList;
