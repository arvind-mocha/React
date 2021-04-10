import { combineReducers } from "redux";

const selectPlayer = (selectedPlayer = null, action) => {
  if (action.type === "PLAYER_SELECTED") {
    return action.player;
  }

  if (action.type === "PLAYER_DELETED") {
    console.log(action.player);
  }

  return selectedPlayer;
};

export default combineReducers({ selectPlayer });
