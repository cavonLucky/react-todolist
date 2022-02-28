import { createStore } from "redux";
import reducer from "./reducer";

// 将记录本的数据传递给 store
const store = createStore(reducer);

export default store;