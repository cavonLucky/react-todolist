
import React from "react";
import { connect } from "react-redux";

class TodoList extends React.Component {
  
  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
          <button>提交</button>
        </div>
        <ul>
          <li>1111</li>
        </ul>
      </div>
    )
  }
}

// 和 store 做映射
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

// store.dispatch, props  将 store.dispatch 挂在在 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue: (e) => {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    }
  }
}

// 让当前组件和store进行链接 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// 让 TodoList 和 store 做链接
// 链接的规则就是 mapStateToProps 里面