import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <input />
          <button>提交</button>
        </div>
        <ul>
          <li>学英语</li>
          <li>学 react</li>
        </ul>
      </React.Fragment>
    )
  }
}

export default TodoList;