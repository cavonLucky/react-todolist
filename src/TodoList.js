import React from "react";
import TodoItem from "./TodoItem";
import './style.css';
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

  handleBtnClick() {
    this.setState({ list: [...this.state.list, this.state.inputValue], inputValue: '' });
  }

  handleItemDelete(index) {
    // immutable: state 不允许我们做任何的改变，如果要改变拷贝一个副本 
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {

    const { inputValue, list } = this.state;
    return (
      <React.Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea" className="input" value={inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <TodoItem
                  key={index}
                  content={item}
                  index={index}
                  deleteItem={this.handleItemDelete.bind(this)}
                />
              )
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default TodoList;