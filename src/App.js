import React, { Fragment, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addItem, selectItem, addList, resetSeleted } from "./redux/ActionCreators";
import DashBoard from "./Components/DashBoard/DashBoard";
import Header from "./Components/Header/Header";
import SessionView from "./Components/SessionView/SessionView";

import "./App.css";

class App extends Component {
  state = {
    //this is coming from redux now
    //practiceItems: PRACTICE_ITEMS,
    //practiceLists: PRACTICELISTS,
  };

  handleNewItem = (title, e) => {
    e.preventDefault();
    console.log("clicked");
    const newPracticeItem = {
      title: title,
      created: new Date().toISOString(),
      id: Math.floor(Math.random() * 100),
      liked: false,
      lastPracticed: undefined,
      selected: false,
      timer: 5,
    };

    // this.setState({
    //   practiceItems: [...this.state.practiceItems, newPracticeItem],
    // });
    this.props.addItem(newPracticeItem);
  };

  handleNewList = (title, e) => {
    e.preventDefault();

    //create new list item
    const newList = {
      name: title,
      items: this.props.practiceItems.filter((item) => item.selected),
      //aritrary data for development, will be dynamic values
      created: new Date().toISOString(),
      lastPracticed: "2 days ago",
      id: Math.floor(Math.random() * 100),
    };

    //reset selected property on item
    const resetItems = this.props.practiceItems.map((item) => {
      return {
        ...item,
        selected: false,
      };
    });

    this.props.addList(newList);
    this.props.resetSeleted(resetItems);

    // this.setState({
    //   practiceLists: [...this.state.practiceLists, newList],
    //   practiceItems: this.state.practiceItems.map((item) => {
    //     return {
    //       ...item,
    //       selected: false,
    //     };
    //   }),
    // });
  };

  handleSelect = (toAdd) => {
    const updatedItems = this.props.practiceItems.map((item) => {
      if (item.id === toAdd.id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return item;
    });

    // this.setState({
    //   practiceItems: updatedItems,
    // });

    this.props.selectItem(updatedItems);
  };

  handleTimer = (itemInList, action) => {
    if (action === "increase") {
      this.increaseTimer(itemInList);
    } else {
      this.decreaseTimer(itemInList);
    }
  };

  increaseTimer = (item) => {
    const itemToChange = item.selectedItem;
    // let newTimer = itemToChange.timer;
    // newTimer++;
    const newListItem = { ...itemToChange, timer: itemToChange.timer++ };

    const updatedPracticeItems = this.state.practiceItems.map((item) => {
      if (item.id === itemToChange.id) {
        item = newListItem;
      }
      return item;
    });

    this.setState({
      practiceItems: updatedPracticeItems,
    });
  };
  decreaseTimer = (item) => {
    const itemToChange = item.selectedItem;
    // let newTimer = itemToChange.timer;
    // newTimer++;
    const newListItem = {
      ...itemToChange,
      timer: itemToChange.timer > 1 ? itemToChange.timer-- : itemToChange.timer,
    };

    const updatedPracticeItems = this.state.practiceItems.map((item) => {
      if (item.id === itemToChange.id) {
        item = newListItem;
      }
      return item;
    });

    this.setState({
      practiceItems: updatedPracticeItems,
    });
  };

  handleHeartClick = () => {};

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <DashBoard
                // practiceList={practiceList}
                // setPracticeList={setPracticeList}
                // practiceItems={practiceItems}
                // setPracticeItems={setPracticeItems}
                practiceLists={this.props.practiceLists}
                practiceItems={this.props.practiceItems}
                handleNewList={this.handleNewList}
                handleNewItem={this.handleNewItem}
                handleSelect={this.handleSelect}
                handleTimer={this.handleTimer}
              />
            )}
          />

          <Route path="/sessionView" component={SessionView} />
          <Redirect to="/" />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  practiceItems: state.practiceItems.items,
  practiceLists: state.practiceLists.lists,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (newPracticeItem) => dispatch(addItem(newPracticeItem)),
  selectItem: (updatedItems) => dispatch(selectItem(updatedItems)),
  addList: (newList) => dispatch(addList(newList)),
  resetSeleted: (resetItems) => dispatch(resetSeleted(resetItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
