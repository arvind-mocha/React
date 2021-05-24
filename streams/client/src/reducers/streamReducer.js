import { FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, CREATE_STREAM, DELETE_STREAM } from "../actions/types";
import _ from "lodash";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // _.mapKeys is a lodash function which will make field id inside object action.payload as key and the whole object including id field inside object.payload as values
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      // extending the object. [action.payload.id] is the key and action.payload is the values atlast we get the extended object. This is how object extending should be performed
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload); //omit will remove the fields inside a object. Here we delete the entire object
    default:
      return state;
  }
};
