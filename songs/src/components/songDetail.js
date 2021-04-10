import React from "react";
import { connect } from "react-redux";

//the value of this parameter song comes from the mapStateToProps function
const SongDetail = (props) => {
  console.log(props);
  // if (!song) {
  //   return <div>Select a song</div>;
  // }
  // return (
  //   <div>
  //     <h3>Details for:</h3>
  //     <p>
  //       Title: {props.song.title}
  //       <br />
  //       <br />
  //       Duration: {props.song.duration}
  //     </p>
  //   </div>
  // );

  return "hi";
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
