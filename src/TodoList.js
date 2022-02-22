import React from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
class TodoList extends React.Component {

  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变的时候，render 函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState(() => ({
      inputValue: e.target.value
    }));
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            key={index}
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
        )
      })
    )
  }

  componentDidMount() {
    axios.get('todolist.json').then(response => {
      console.log(response.data);
      this.setState(() => ({ list: [...response.data] }));
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <React.Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </React.Fragment>
    )
  }
}

export default TodoList;