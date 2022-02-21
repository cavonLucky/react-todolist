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

  // 在组件即将被挂载到页面的时刻 自动执行
  componentWillMount() {
    console.log('componentWillMount ');
  }

  // 组件在被挂载到页面之后自动被执行
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 组件被更新之前，他会被自动执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    // 你的组件需要更新吗：
    return true;
    // return false;
  }

  // 组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后
  // 如果 shouldComponentUpdate 返回true它会执行
  // 如果返回 false 这个函数就不会被执行了
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // 组件更新完成之后，它会被执行
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  

  render() {
    console.log('parent render ');
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