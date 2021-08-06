import React, { useState, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import Header from "./Components/Header/Header";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <DashBoard />} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
