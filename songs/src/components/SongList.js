import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    console.log(this.props);

    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

//connect is a function
//we are calling function inside connect

//here we connect provider with a react component

//the parameter for the connect function is a function where we get the state from the provider which is called every time when the state changes
//the parameter fo the function inside connect is the react component
export default connect(mapStateToProps)(SongList);
