import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// JSX 语法中，我们如果要使用自己创建的组建，组建必须使用大写字母开头
ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
