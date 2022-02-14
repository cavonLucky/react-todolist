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
