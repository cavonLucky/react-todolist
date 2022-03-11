import axios from "axios";
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ITEM } from "./actionTypes";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const getInitListAction = (data) => ({
  type: INIT_LIST_ITEM,
  data
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get("todolist.json").then(response => {
      const action = getInitListAction(response.data);
      dispatch(action);
    });
  }
}