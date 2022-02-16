import React from "react";
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
          {/* 点击文字输入内容鼠标光标移入 input 框 */}
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea" className="input" value={inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {/* <li>学英语</li>
          <li>学 react</li> */}
          {
            list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={this.handleItemDelete.bind(this, index)}
                  // 转义：在 input 中输入 <h1>hello world</h1> 转义成 hello world
                  dangerouslySetInnerHTML={{ __html: item }}
                >
                  {/* 由于用到了 dangerouslySetInnerHTML 转义属性下面就不需要渲染展示了 */}
                  {/* {item} */}
                </li>
              )
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default TodoList;