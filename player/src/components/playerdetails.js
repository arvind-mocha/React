import React from "react";
import { connect } from "react-redux";

const playerDetails = ({ player }) => {
  if (!player) {
    return null;
  }

  return (
    <div>
      <h1>{player.name}</h1>
      <h1>{player.auction}</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { player: state.selectPlayer };
};

export default connect(mapStateToProps)(playerDetails);
