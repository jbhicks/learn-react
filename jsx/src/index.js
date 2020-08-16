<<<<<<< HEAD
// Import the React and React DOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = function () {
    const buttonText = { text: 'Click me'};
    const style = { backgroundColor: 'blue', color: 'white'};
    const labelText = "Enter name: "

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    )};

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
=======
// Import React & ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = "Click me!";
  const labelText = 'Enter name!';
  
  return (
    <div>
     <label className="label" htmlFor="name">{labelText}</label>
     <input id="name" type="text"/>
     <button style={{backgroundColor: "blue", color: "white"}}>{buttonText}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));


>>>>>>> 9f03002eb402da4e2590e46e8a4596030a0773af
