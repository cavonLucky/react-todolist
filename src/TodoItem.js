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
  render() {
    const { content, test } = this.props;
    return (
      <div onClick={this.handleClick}>{test} - {content}</div>
    )
  }
}

// 做属性类型的强校验
TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  test: PropTypes.string.isRequired 
}

// 加入 test 没填就给 test 一个默认值
TodoItem.defaultProps = {
  test: "hello world"
}

export default TodoItem;