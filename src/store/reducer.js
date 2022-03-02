
const defaultState = {
  inputValue: "",
  list: [1, 3]
};

/**
 * reducer: 可以接收 state，绝不能修  改 state
 * @param state {object} 上一次存储的数据（store仓库的整个数据，也是比喻为记录本的数据）
 * @param action {object} 传过来的当前数据
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_todo_tem") {
    const newState = JSON.parse(JSON.stringify(state));
    console.log(newState);
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    console.log('add_todo_tem: ', newState);
    return newState;
  }
  console.log('state, action: ', state, action);
  return state; 
}