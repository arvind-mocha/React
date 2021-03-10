import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends React.Component {
  onSearch = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        q: search,
      },
    });

    console.log(response.data);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
      </div>
    );
  }
}

export default App;
