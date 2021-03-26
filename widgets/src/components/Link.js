import React from "react";

const Link = ({ className, href, children }) => {
  //this keys are used to open links in new tabs
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    //Clicking the header link does not refresh the page anymore
    event.preventDefault();

    //This piece of code changes the url. Since we have prevented the function of 'a' tag the url only changes the content won't
    window.history.pushState({}, "", href);

    //popstate is the event dispatched by the dispatchEvent function
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
