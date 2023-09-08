import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

import { Counter } from "./component/Counter.jsx";
let counter = 0
setInterval(() => { ReactDOM.render(<Counter seconds={counter} />, document.querySelector("#app")); counter++; }, 1000)