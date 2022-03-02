import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: store.getState().list,
      inputValue: store.getState().inputValue
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    console.log('handleInputChange: ', e.target.value);
    store.dispatch(action);
  }

  handleStoreChange(e) {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = {
      type: 'add_todo_tem'
    };
    store.dispatch(action);
  }

  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
          style={{ marginTop: '10px', width: '300px' }}
        />
      </div>
    )
  }
}

export default TodoList;