import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Reducer from "./reducers";

import { Provider } from "react-redux";
import { createStore } from "redux";

ReactDOM.render(
  <Provider store={createStore(Reducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
