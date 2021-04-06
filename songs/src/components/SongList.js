import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

//connect is a function
//we are calling function inside connect

//here we connect provider with a react component

//the parameter for the connect function is a function where we get the state from the provider which is called every time when the state changes
//the second parameter for the connect function is the props which is passes to the component
//the parameter for the function inside connect is the react component

export default connect(mapStateToProps, { selectSong })(SongList);
