import { v4 as uuidv4 } from "uuid";
export const ADD_TODO = "ADD_TODO";
export const SHOW_TODO_FIELD = "SHOW_TODO_FIELD";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETED = "COMPLETED";
export const EDITED_TODO = "EDITED_TODO";
export const SAVE_TO_LOCAL_STORAGE = "SAVE_TO_LOCAL_STORAGE";
export const CLEARALL = "CLEARALL";
export const FILTEREDLIST = "FILTEREDLIST";
export const doneTodo = (data) => ({
  type: ADD_TODO,
  payload: {
    id: uuidv4(),
    data: data,
  },
});
export const completeTodo = (id) => ({
  type: COMPLETED,
  payload: {
    id: id,
  },
});

export const addTodo = () => ({
  type: SHOW_TODO_FIELD,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id: id,
  },
});
export const remove = () => ({
  type: CLEARALL,
});
export const editedData = (data, id) => ({
  type: EDITED_TODO,
  payload: {
    id: id,
    data: data,
  },
});
export const saveToLocalStorage = (data) => ({
  type: SAVE_TO_LOCAL_STORAGE,
  payload: {
    data,
  },
});
export const filteredList = (title) => ({
  type: FILTEREDLIST,
  payload: {
    title,
  },
});
