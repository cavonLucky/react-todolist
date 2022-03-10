import React from "react";
import { Input, Button, List } from "antd";

// 无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{ margin: 10 }}>
      <div>
        <Input
          placeholder="todo info"
          style={{ width: 300, marginRight: 10 }}
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{ width: 300, marginTop: 10 }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={(index) => props.handleItemDelete(index)}>{item}</List.Item>}
      />
    </div>
  )
}

export default TodoListUI;