import React from "react";

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    //React.Fragment tells the browse that we are having a list of components not a single one
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => console.log("Clicked Title " + item.title)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
