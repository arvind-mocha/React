import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            {/* the state is changing */}
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
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

//state is the props passed by the Provider which are the reducers
//the value returned by this function is the props for the above react component since we attached it
const mapStateToProps = (state) => {
  console.log("FROM LIST", state);
  return { songs: state.songs };
};

//connect is a function
//we are calling function inside connect

//here we connect provider with a react component

//the parameter for the connect function is a function where we get the state from the provider which is called every time when the state changes
//the second parameter for the connect function is the ( action ) dispatcher which is passed to the component
//giving dispatcher is the only way to update the state
//the parameter for the function inside connect is the react component

export default connect(mapStateToProps, { selectSong })(SongList);
