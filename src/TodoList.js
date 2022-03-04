import React from "react";
import "antd/dist/antd.css";
import { Button, Input, List } from "antd";
import store from "./store";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: store.getState().inputValue,
      list: store.getState().list
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = {
      type: "add_todo_item"
    };
    store.dispatch(action);
  }

  render() {
    return (
      <div style={{ margin: 10 }}>
        <div>
          <Input
            placeholder="todo info"
            style={{ width: 300, marginRight: 10 }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{ width: 300, marginTop: 10 }}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }
}

export default TodoList;