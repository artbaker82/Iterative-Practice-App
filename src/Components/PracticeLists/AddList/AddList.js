import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddList.css";

import {
  Modal,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const AddList = ({ practiceItems, handleNewList, handleSelect }) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  // const handleSelect = (selectedItem) => {
  //   setSelected(
  //     itemsToSelect.map((item) => {
  //       if (item.id === selectedItem.id) {
  //         return {
  //           ...item,
  //           selected: !item.selected,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };

  // const toAdd = () => {
  //   return itemsToSelect.filter((item) => item.selected);
  // };

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
          <Form onSubmit={(e) => handleNewList(title, e)}>
            <FormGroup>
              <Label for="listName">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="name your list"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Input>
            </FormGroup>
            <div className="add-list-container">
              <h3>Select Items</h3>
              {practiceItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className={`${
                      item.selected ? "add-list-item-wrapper-selected" : "add-list-item-wrapper"
                    }`}
                  >
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>

            <Button onClick={toggle} type="submit" value="submit" color="primary">
              Create New list
            </Button>
          </Form>
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
