import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";
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

  handleInputChange() {
    this.setState(() => ({
      inputValue: this.input.value
    }));
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => { 
      // 由于 setState 是异步，第二个参数是回调函数，所以此时直接操作的真实的dom结果正确 
      console.log(this.ul.querySelectorAll('div').length);
    });
    // 直接操作真实的 dom 结果不对，ref 导致的，所以不建议、也尽量不使用 ref 
    // console.log(this.ul.querySelectorAll('div').length); // 从 0 开始，0 1 2... 
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
            ref={input => this.input = input}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={ul => this.ul = ul}>
          {this.getTodoItem()}
        </ul>
      </React.Fragment>
    )
  }
}

export default TodoList;