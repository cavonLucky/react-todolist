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
          <input value={inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {/* <li>学英语</li>
          <li>学 react</li> */}
          {
            list.map((item, index) => {
              return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default TodoList;