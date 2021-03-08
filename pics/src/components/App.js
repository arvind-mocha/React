import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearched(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitted={this.onSearched} />
      </div>
    );
  }
}

export default App;
