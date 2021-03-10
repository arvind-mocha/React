import React from "react";

class SearchBar extends React.Component {
  state = { search: "" };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSearch(this.state.search);
  };

  render() {
    return (
      <div className="ui segemnt">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.search}
              onChange={(val) => this.setState({ search: val.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
