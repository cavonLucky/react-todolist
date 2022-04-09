import { createStore, compose, applyMiddleware } from "redux";
// 1. 引入
import createSagaMiddleware from 'redux-saga'; // 创建中间价的方法
import reducer from "./reducer";
// 4. 创建一个 sagas 文件，并且引入
import mySaga from "./sagas";

/**
 * 1. 首先按照官方文档配置好 saga
 */

// 2. 创建
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
  reducer,
  // 3. 使用
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// 5. 运行
sagaMiddleware.run(mySaga);

export default store;

// 6. 在 sagas 文件中写逻辑