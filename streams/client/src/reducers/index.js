import { combineReducers } from "redux";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: formReducer, // the redux form's reducer must be a value of key called form else it causes an error
  streams: streamReducer,
});
