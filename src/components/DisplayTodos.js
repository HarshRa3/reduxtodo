import { Box, Checkbox, Divider, Fab, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch} from "react-redux";
import { completeTodo } from "../redux/action";

const DisplayTodos = ({ text,handleDelete }) => {
  // const complete_incomplete=useSelector(state=>state.todoReducer.list.filter((e)=))
  // console.log(complete_incomplete);
  const dispatch=useDispatch()
  return (
    <>
   <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          minHeight: "60px",
          fontFamily:'SFProDisplay'
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            textAlign: "left",
            fontFamily:'SFProDisplay'
          }}
        >
          <Checkbox onClick={()=>dispatch(completeTodo())} />
          
            <Typography variant="h5" sx={{ wordWrap: "anywhere", fontFamily:'SFProText'}}>
              {text}
            </Typography>
 
        </Box>
        <Box sx={{ width: { xs: "40%", lg: "23%" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
              <Fab
                size="small"
                color="secondary"
                aria-label="edit"
                // onClick={handleEdit}
                sx={{ zIndex: 1 }}
              >
                <EditIcon sx={{fontFamily:'SFProDisplay'}} />
              </Fab>
          

            <Fab
              size="small"
              color="error"
              aria-label="delete"
                sx={{ zIndex: 1,fontFamily:'SFProDisplay' }}
                onClick={handleDelete}
            >
              <DeleteIcon />
            </Fab>
            <Fab
              size="small"
              color="error"
              aria-label="delete"
                sx={{ zIndex: 1,fontFamily:'SFProDisplay' }}
            >
              
            </Fab>
           
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
      
    </>
  );
};

export default DisplayTodos;
