import { combineReducers } from "redux";

const selectPlayer = (selectedPlayer = null, action) => {
  if (action.type === "PLAYER_SELECTED") {
    return action.player;
  }

  if (action.type === "PLAYER_DELETED") {
    delete action.player.name;
    delete action.player.auction;
  }

  if (action.type === "SHOW_PLAYER") {
    console.log("this is me");
  }

  return selectedPlayer;
};

export default combineReducers({ selectPlayer });
