import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  // create portal is used to avoid react and make our own component by referencing the html !!!. This is more uuseful when using backend frameworks like django
  // the purpose we used it here is to make this modal or popup above all contents like z-index 100
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        {/* stop propagation to avoid event bubbling */}
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
