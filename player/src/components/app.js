import React from "react";
import PlayerList from "./playerList";
import PlayerDetails from "./playerDetails";

export default (props) => {
  return (
    <div>
      <PlayerList Data={props.Data} />
      <PlayerDetails />
    </div>
  );
};
