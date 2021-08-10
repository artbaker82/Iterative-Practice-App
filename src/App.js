import React, { useState, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import Header from "./Components/Header/Header";
import { PRACTICELISTS } from "./assets/PRACTICELISTS";
import { PRACTICEITEMS } from "./assets/PRACTICEITEMS";
import "./App.css";
function App() {
  const [practiceList, setPracticeList] = useState(PRACTICELISTS);
  const [practiceItems, setPracticeItems] = useState(PRACTICEITEMS);

  const [inputText, setInputText] = useState("");
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <DashBoard
              practiceList={practiceList}
              setPracticeList={setPracticeList}
              practiceItems={practiceItems}
              setPracticeItems={setPracticeItems}
              inputText={inputText}
              setInputText={setInputText}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}

export default App;
