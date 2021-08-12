import React, { useState, Fragment, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import Header from "./Components/Header/Header";
import { PRACTICELISTS } from "./assets/PRACTICELISTS";
import { PRACTICEITEMS } from "./assets/PRACTICEITEMS";
import "./App.css";

class App extends Component {
  state = {
    practiceItems: PRACTICEITEMS,
    practiceLists: PRACTICELISTS,
  };

  handleNewItem = (e, title) => {
    e.preventDefault();
    const newPracticeItem = {
      title: title,
      created: new Date().toISOString(),
      id: Math.floor(Math.random() * 100),
      liked: false,
      lastPracticed: undefined,
      selected: false,
      timer: 5,
    };

    this.setState({
      practiceItems: [...this.state.practiceItems, newPracticeItem],
    });
  };

  handleNewList = (title, e) => {
    e.preventDefault();
    console.log(title);
    const newList = {
      name: title,
      items: this.state.practiceItems.filter((item) => item.selected),
      //aritrary data for development, will be dynamic values
      created: new Date().toISOString(),
      lastPracticed: "2 days ago",
      id: Math.floor(Math.random() * 100),
    };

    this.setState({
      practiceLists: [...this.state.practiceLists, newList],
      practiceItems: this.state.practiceItems.map((item) => {
        return {
          ...item,
          selected: false,
        };
      }),
    });
  };

  handleSelect = (toAdd) => {
    const updatedItems = this.state.practiceItems.map((item) => {
      if (item.id === toAdd.id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return item;
    });

    this.setState({
      practiceItems: updatedItems,
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
                practiceLists={this.state.practiceLists}
                practiceItems={this.state.practiceItems}
                handleNewList={this.handleNewList}
                handleNewItem={this.handleNewItem}
                handleSelect={this.handleSelect}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
// function App() {
//   const [practiceList, setPracticeList] = useState(PRACTICELISTS);
//   const [practiceItems, setPracticeItems] = useState(PRACTICEITEMS);

//   const [inputText, setInputText] = useState("");
//   return (
//     <Fragment>
//       <Header />
//       <Switch>
//         <Route
//           exact
//           path="/"
//           render={() => (
//             <DashBoard
//               practiceList={practiceList}
//               setPracticeList={setPracticeList}
//               practiceItems={practiceItems}
//               setPracticeItems={setPracticeItems}
//               inputText={inputText}
//               setInputText={setInputText}
//             />
//           )}
//         />
//         <Redirect to="/" />
//       </Switch>
//     </Fragment>
//   );
// }

// export default App;
