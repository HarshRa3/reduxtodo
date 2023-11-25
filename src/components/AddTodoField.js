import React, { useState } from "react";
import CancelDoneButton from "./CancelDoneButton";
import { Box, Divider, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo, doneTodo } from "../redux/action";
const AddTodoField = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          position: "absolute",
          width: "100%",
          zIndex: "3",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "70%", md: "50%", lg: "30%" },
            border: "2px solid #2823232e",
            bgcolor: "white",
          }}
        >
          <Typography variant="h5" sx={{ margin: "15px 5%" }}>
            Add Todo
          </Typography>
          <TextField
            id="outlined-multiline-static"
            label="Enter Text Here"
            multiline
            rows={6}
            sx={{ width: "90%", marginLeft: "5%" }}
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <Box
            sx={{
              display: "flex",
              width: "80%",
              margin: "15px auto",
              justifyContent: "space-between",
            }}
          >
            <CancelDoneButton btnTitle="cancel" dataa={()=>dispatch(addTodo())} />
            <CancelDoneButton
              btnTitle="Done"
              dataa={() => dispatch(doneTodo(inputData,setInputData('')))}
            />
          </Box>
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default AddTodoField;
