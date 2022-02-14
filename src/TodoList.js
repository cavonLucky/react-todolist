import React from "react";

class TodoList extends React.Component {

  constructor(props) {
    super(props); // 指向 Component
    this.state = {
      inputValue: '',
      list: []
    }
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {

    const { inputValue } = this.state;
    return (
      <React.Fragment>
        <div>
          <input value={inputValue} onChange={this.handleInputChange.bind(this)} />
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