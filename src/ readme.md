# React16.4 开发简书项目 从零基础入门到实战

## react 初探
### react 简介

1. Facebook 推出
2. 2013年5月开源
3. 函数式编程
4. 使用人数最多的前端框架
5. 健全的文档与 完善的社区
6. 16版本之后的称之为 react fiber 或者 16 版本中的底层实现

### 开发环境准备

1. 引入 .js 文件来使用 react 
2. 通过脚手架工具来编码 （grunt、gulp、webpack）
3. create-react-app （官方提供的、健壮性、使用简单……）

<pre>
npx create-react-app react-todolist
cd react-todolist
npm start

// 直接使用 npm install -g yarn 会报错，因为没有权限
sudo npm install -g yarn
// (开机密码)
Password:

</pre>

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * PWA: progressive web application
 * https 协议的服务器上，
 * 即使断网了第二次进来依然可以看到之前访问到，
 * 因为 registerServiceWorker 会帮助我们把之前的网页存储在浏览器之内
 */
// import registerServiceWorker form './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

### JSX 语法

使用 jsx 语法必须引入 react，不然没办法编译直接报错（render 里面的标签都是 jsx 语法）。在 react 在中，在 js 文件里面写的标签称之为 jsx 语法。