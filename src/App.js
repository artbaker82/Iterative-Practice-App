import React, { useState, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import Header from "./Components/Header/Header";
import { PRACTICELISTS } from "./assets/PRACTICELISTS.js";
import "./App.css";
function App() {
  const [practiceList, setPracticeList] = useState(PRACTICELISTS);
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
