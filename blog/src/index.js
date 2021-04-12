import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Reducer from "./reducers";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

//Integrating our middle ware redux-thunk
//It as it's purpose and some advantages to
const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
