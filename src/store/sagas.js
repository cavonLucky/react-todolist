import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from "./actionTypes";
import { getInitListAction } from "./actionCreators";
import axios from "axios";

function* getInitList() {
  // 如果res.data 为空 那么此时会报异常
  try {
    const res = yield axios.get("todolist.json");
    const action = getInitListAction(res.data);
    // 调用 store 将数据给到 reducer
    yield put(action);
  } catch (error) {
    alert("网络出错，请检查！");
  }
}

function* mySaga() {
  // 捕捉类型  执行方法
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;