import { createStore } from "redux";
import reducer from "./reducer";

// 将记录本的数据传递给 store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;