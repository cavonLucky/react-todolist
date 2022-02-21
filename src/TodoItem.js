import React from "react";
import PropTypes from "prop-types"

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteItem(this.props.index);
  }

  /**
   * 1. 当一个组件要从父组件接收参数（条件）
   * // 2. 只要父组件的 render 函数被重新执行了，子组件的这个生命周期函数就会被执行（执行时刻）
   * 如果这个组件第一次存在于父组件中，不会执行
   * 如果这个组件之前已经存在于父组件中，才会执行
   */
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  }

  // 当这个组件即将被从页面中剔除的时候，会被执行
  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }

  render() {
    console.log('child render');
    const { content, test } = this.props;
    return (
      // JSX -> JS 对象 -> 真实的 DOM
      <div onClick={this.handleClick}>{test} - {content}</div>
      // 更倾向一个 react 的底层的结构, JSX -> createElement -> 虚拟 dom(JS 对象) -> 真实的 DOM
      // React.createElement('div', {}, 'item');
    )
  }
}

// 做属性类型的强校验
TodoItem.propTypes = {
  // content: PropTypes.string,
  // number || string
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  test: PropTypes.string.isRequired 
}

// 加入 test 没填就给 test 一个默认值
TodoItem.defaultProps = {
  test: "hello world"
}

export default TodoItem;