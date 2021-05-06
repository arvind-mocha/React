import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Reducers from "./reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const Data = [
  { name: "Arvind", auction: "999999999k" },
  { name: "Mani", auction: "40000000k" },
  { name: "Vijay", auction: "250000k" },
  { name: "Chnadru", auction: "1500000k" },
];

const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App Data={Data} />
  </Provider>,
  document.getElementById("root")
);
