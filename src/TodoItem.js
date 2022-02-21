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

  // setState 异步函数 可以把多次数据的改变结合成一次来做 降低虚拟 dom 的刷新频率
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
       return true;
    } else {
      return false;
    }
  }

  render() {
    console.log('child render');
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>{content}</div>
    )
  }
}

// 做属性类型的强校验
TodoItem.propTypes = {
  // number || string
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number,
}

export default TodoItem;