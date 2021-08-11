import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faPlus, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
library.add(far, faHeart, faPlus, faSortUp, faSortDown);

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
