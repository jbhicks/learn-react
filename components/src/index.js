import React from "react";
import ReactDOM from "react-dom";

// Create a React component
const App = function () {
  return (
  <div className="ui container comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metaData">
          <span className="date">
            Today at 6:00PM
          </span>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  </div>
  )};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));