import React from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

class TodoList extends React.Component {
  render() {
    const data = [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Los Angeles battles huge wildfires.',
    ];
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
          />
          <Button type="primary">提交</Button>
        </div>
        <List
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
          style={{ marginTop: '10px', width: '300px' }}
        />
      </div>
    )
  }
}

export default TodoList;