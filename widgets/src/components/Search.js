import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  //if no second argument for the useeffect then it run one time then every time after rerendering
  //if second argument is an empty array [] then it run only the first time
  //if second argument is not an empty array [term] then it run one time then every time after rerendering then if the data changes from the last render

  useEffect(() => {
    const search = async () => {
      await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
    };

    search();
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter the Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
