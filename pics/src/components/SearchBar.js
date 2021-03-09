import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };

  //it causes error because this ponits the function which it is beeing called
  //so onFormSubmit does not have any variable called state
  // onFormSubmit(event) {
  //   event.preventDefault();

  //   console.log(this.state.term);
  // }

  //to solve this we can use arrow function since they don't know what is this keyword
  //so the this keyword used in arrow functions indicates the global variables
  onFormSubmit = (event) => {
    event.preventDefault();

    //since we are calling it from the jsx this belongs to the jsx
    //console.log(this);
    this.props.onSubmitted(this.state.term);
  };

  //render method is called when the state changes

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search here"
              /* This is how we do in react world by using state */
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
