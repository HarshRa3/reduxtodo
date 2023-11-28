import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import DisplayTodos from "./components/DisplayTodos";
import { completeTodo, deleteTodo, addTodo, remove } from "./redux/action";
import { Box, Button, Fab } from "@mui/material";
import Filter from "./components/Filter";

const App = () => {
  const list = useSelector((state) => state.todoReducer.list);
  const [filterType, setFilterType] = useState("all");
  const [filterData, setFilterData] = useState(list);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      dispatch(addTodo(JSON.parse(storedTodos)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
    setFilterData(list); 
  }, [list]);

  useEffect(() => {
    if (filterType === "completed") {
      setFilterData(list.filter((item) => item.check === true));
    } else if (filterType === "incompleted") {
      setFilterData(list.filter((item) => item.check === false));
    } else {
      setFilterData(list);
    }
  }, [filterType, list]);

  const handleFilter = (type) => {
    setFilterType(type);
  };

  return (
    <>
      <Header />

      {list.length > 0 && <Filter handleFilter={handleFilter} />}
      <Box sx={{ maxHeight: "500px", overflow: "auto" }}>
        {filterData.map((e) => (
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
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
        {list.length > 0 && (
          <Button variant="contained" onClick={() => dispatch(remove())}>
            Clear All
          </Button>
        )}
      </Box>
    </>
  );
};

export default App;
