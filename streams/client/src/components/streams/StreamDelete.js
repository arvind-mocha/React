import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    // we can't return two buttons in side on component.
    // instead of wraping it with div we can use react.fragment which is like a div but unpacked when used.

    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancle</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal title="Delete Stream" content="Are You Sure ?" actions={actions} />
    </div>
  );
};

export default StreamDelete;
