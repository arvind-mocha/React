import React from "react";

const Spinner = (props) => {
  return (
    <div
      className="ui active inverted dimmer"
      style={{ backgroundColor: "black" }}
    >
      <div className="ui text loader" style={{ color: "gold" }}>
        {props.message}
      </div>
    </div>
  );
};

//if we forget to give a parameter for props we can have default props so if we forget then default props will be taken

Spinner.defaultProps = {
  message: "loading...",
};

export default Spinner;
