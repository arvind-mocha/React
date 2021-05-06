import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

//props can only be accessed inside the class but
//if you need to access props inside mapStateToProps we can use the second argument
//ownProps is just the given in the react docs you can use any name
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) }; // find is a array method which returns the satisfied values based on the criteria
};

export default connect(mapStateToProps)(UserHeader);
