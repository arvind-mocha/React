import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPlayer, deletePlayer } from "../actions";

class selectedPlayer extends Component {
  renderList() {
    return this.props.Data.map((data) => {
      return (
        <div key={data.auction}>
          <h1 onClick={() => this.props.deletePlayer(data)}>{data.name}</h1>
          <button onClick={() => this.props.selectPlayer(data)}>Select</button>
        </div>
      );
    });
  }

  render() {
    console.log("from class");
    console.log(this.props);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { player: state };
};

export default connect(mapStateToProps, { selectPlayer, deletePlayer })(selectedPlayer);
