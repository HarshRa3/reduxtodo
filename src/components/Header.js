import { Box , Typography } from "@mui/material";
import React from "react";
import AddTodoField from './AddTodoField'
const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          position:'relative'
        }}
      >
        <Typography variant="h3" sx={{fontFamily:'SFProDisplay',fontWeight:'bolder'}}>Today</Typography>
        <AddTodoField/>
      </Box>
    </>
  );
};

export default Header;
