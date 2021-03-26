import React from "react";
import Link from "./Link";

const Header = () => {
  //Link is a custom jsx tag we created to avoid refreshing of  the page while navigation

  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        {/* This is the children */}
        Accordion
      </Link>
      <Link href="/list" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
