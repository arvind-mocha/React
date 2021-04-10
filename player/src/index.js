import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Reducers from "./reducer";

import { createStore } from "redux";
import { Provider } from "react-redux";

const Data = [
  { name: "Arvind", auction: "999999999k" },
  { name: "Mani", auction: "40000000k" },
  { name: "Vijay", auction: "250000k" },
  { name: "Chnadru", auction: "1500000k" },
];

ReactDOM.render(
  <Provider store={createStore(Reducers)}>
    <App Data={Data} />
  </Provider>,
  document.getElementById("root")
);
