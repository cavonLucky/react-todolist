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
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
            value={this.state.inputValue}
          />
          <Button type="primary">提交</Button>
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