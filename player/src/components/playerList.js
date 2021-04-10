import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPlayer } from "../actions";

class selectedPlayer extends Component {
  renderList() {
    return this.props.Data.map((data) => {
      return (
        <div key={data.auction}>
          <h1>{data.name}</h1>
          <button onClick={() => this.props.selectPlayer(data)}>Select</button>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { player: state };
};

export default connect(mapStateToProps, { selectPlayer })(selectedPlayer);
