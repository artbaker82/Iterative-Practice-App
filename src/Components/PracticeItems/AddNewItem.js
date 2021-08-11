import React, { Fragment, useState } from "react";
import "./css/AddNewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const AddNewItem = ({ handleNewItem }) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const toggle = () => setModal(!modal);

  // const addNewHandler = (e) => {
  //   e.preventDefault();
  //   setPracticeItems([
  //     ...practiceItems,
  //     {
  //       title: title,
  //       created: undefined,
  //       id: Math.floor(Math.random() * 100),
  //       liked: false,
  //       lastPracticed: undefined,
  //       selected: false,
  //       timer: 5,
  //     },
  //   ]);
  //   toggle();
  // };

  return (
    <Fragment>
      <span onClick={toggle} className="add-new-item-wrapper">
        <FontAwesomeIcon
          icon="plus"
          style={{ margin: "0 0 0 0.7rem", alignSelf: "center" }}
        ></FontAwesomeIcon>
        <span className="text">Add new</span>
      </span>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Practice Item</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => handleNewItem(e, title)}>
            <FormGroup>
              <Label htmlFor="username">Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>

            <Button type="submit" value="submit" color="primary">
              Add
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

export default AddNewItem;
