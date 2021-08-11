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
                handleNewItem={this.handleNewItem}
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
