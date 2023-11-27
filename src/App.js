import React, { useEffect } from "react";
import Header from "./components/Header";
import AddTodoField from "./components/AddTodoField";
import { useDispatch, useSelector } from "react-redux";
import DisplayTodos from "./components/DisplayTodos";
import { completeTodo, deleteTodo, addTodo } from "./redux/action";
import { Fab } from "@mui/material";

const App = () => {
  const toggleBtn = useSelector((state) => state.todoReducer.ADDTODO);
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  // Retrieve initial data from local storage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      dispatch(addTodo(JSON.parse(storedTodos)));
    }
  }, [dispatch]);

  // Save to local storage when the 'list' changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Header />
      {toggleBtn && <AddTodoField />}
      {list.map((e) => {
        return (
          <DisplayTodos
            text={e.data}
            key={e.id}
            id={e.id}
            handleDelete={() => dispatch(deleteTodo(e.id))}
            handleCheck={() => dispatch(completeTodo(e.id))}
            checked={e.check}
            complete={
              e.check ? (
                <Fab
                  size="small"
                  color="success"
                  sx={{ zIndex: 1, fontFamily: "SFProDisplay" }}
                />
              ) : (
                <Fab
                  size="small"
                  color="error"
                  sx={{ zIndex: 1, fontFamily: "SFProDisplay" }}
                />
              )
            }
          />
        );
      })}
    </>
  );
};

export default App;
