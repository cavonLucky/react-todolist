import React from "react";
import { Input, Button, List } from "antd";

class TodoListUI extends React.Component {
  render() {
    return (
      <div style={{ margin: 10 }}>
        <div>
          <Input
            placeholder="todo info"
            style={{ width: 300, marginRight: 10 }}
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{ width: 300, marginTop: 10 }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => <List.Item onClick={(index) => this.props.handleItemDelete(index)}>{item}</List.Item>}
        />
      </div>
    )
  }
}

export default TodoListUI;