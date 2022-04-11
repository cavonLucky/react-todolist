import React from "react";
import { connect } from "react-redux";

class TodoList extends React.Component {
  render() {
    const { inputValue, changeInputValue, handleBtnClick, list, handleDeleteItem } = this.props;
    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue} />
          <button onClick={handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => (
              <li value={item} key={index} onClick={handleDeleteItem.bind(index)}>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue: (e) => {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },
    handleBtnClick: () => {
      const action = {
        type: "click_btn_list"
      };
      dispatch(action);
    },
    handleDeleteItem: (index) => {
      const action = {
        type: "click_delete_item",
        index
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);