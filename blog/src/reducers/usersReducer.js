export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload]; // state array as nothing so action.payload replace the state with value. this makes state changes
    default:
      return state;
  }
};
