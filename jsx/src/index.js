import React from 'react';
import ReactDOM from 'react-dom';

const buttonText = 'Click Me';

const App = function () {
  return (
    <div>
      <label className="label" htmlFor="name">
        Name :
      </label>
      <input id="input" type="text"></input>
      <button
        style={{ backgroundColor: 'green', color: 'white', fontSize: '20px' }}
      >
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
