<<<<<<< HEAD
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
=======
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeago="today at 4:45pm"
          content="heyo!!sdfsdfsdfsda"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeago="yesterday at 3:34pm"
          content="what is this? i don't even"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeago="yesterday at 12:00am"
          content="i miss you!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
>>>>>>> 9f03002eb402da4e2590e46e8a4596030a0773af
