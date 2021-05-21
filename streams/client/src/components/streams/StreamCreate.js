import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // we have destructured the props so
  // {...input} is equal to assigning value to properties eg: onChange = {this.function}
  // there are many properties inside the input
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    // made this function a arrow function because we are calling this function from our jsx which don't know anything about this
    // so when we call this.renderError from this function there is no meaning for this

    console.log(meta); // meta informatio includes the form name, error message ect
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    //Field are from redux form which doesn't know any thing about the properties inside it
    //handel submit is a redux form function which prevents form submition and return the input as props
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const e = {};

  if (!formValues.title) {
    e.title = "You must enter a title";
  }

  if (!formValues.description) {
    e.description = "You must enter a description";
  }

  return e;
};

export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
//second parameter is for validation functions
//third parameter is for warning function, we have not passed third parameter to redux form
//since we passed validate as second argument we get access to the formValues or input
// The function validate is applied to each tags which has the name title or description, the connection is validate has title and description inside it. this is how redux form works
