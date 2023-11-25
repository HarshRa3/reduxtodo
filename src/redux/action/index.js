import { nanoid } from "@reduxjs/toolkit";

// Action types
export const ADD_TODO = 'ADD_TODO';
export const SHOW_TODO_FIELD = 'SHOW_TODO_FIELD';
export const DELETE_TODO = 'DELETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETED='COMPLETED'

// Action creators
export const doneTodo = (data) => ({
  type: ADD_TODO,
  payload: {
    id: nanoid(),
    data: data,
    
  },
});
export const completeTodo = () => ({
  type: COMPLETED,
  
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
export const removeTodo = () => ({
  type: REMOVE_TODO,
})