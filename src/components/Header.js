import { Box, Fab, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
// import { UnpublishedOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
const Header = () => {
  const dispatch=useDispatch()
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Typography variant="h3" sx={{fontFamily:'SFProDisplay',fontWeight:'bolder'}}>Today</Typography>
        <Fab color="success" aria-label="add" onClick={()=>dispatch(addTodo())} >
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
};

export default Header;
