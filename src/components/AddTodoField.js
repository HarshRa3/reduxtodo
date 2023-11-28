import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { Fab, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {  doneTodo } from "../redux/action";
import CancelDoneButton from "./CancelDoneButton";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
  position: "absolute",
  top:{xs:'10%', sm:'6%', md:'10%',lg:'26%'},
  left:{xs:'10%', sm:'14%', md:'23%',lg:'36%'},
  width: { xs: "80%", sm: "70%", md: "50%", lg: "30%" },
  border: "2px solid #2823232e",
  bgcolor: "white",
  // zIndex: ,
  margin:'auto',
  overflow: "hidden",
  flexDirection:'column',
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputData, setInputData] = React.useState("");
  const dispatch = useDispatch();
  const handleOnPress = (e) => {
    if (e.key === "Enter") {
      handle()
    }
  };
  const handle=()=>{
    handleClose()
     dispatch(doneTodo(inputData, setInputData("")))
  }

  return (
    <div>
      <Fab onClick={handleOpen} variant="contained" color="success">
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography variant="h5" sx={{ margin: " 0 5% 10px 5%" }}>
            Add Todo
          </Typography>
          <TextField
            id="outlined-multiline-static"
            label="Enter Text Here"
            multiline
            rows={6}
            sx={{ width: "90%",  }}
            value={inputData}
            focused
            onChange={(e) => {
              setInputData(e.target.value);
            }}
            // inputRef={inputRef}
            onKeyPress={(e) => handleOnPress(e)}
          />
          <Box
            sx={{
              display: "flex",
              width: "80%",
              margin: "0px auto",
              justifyContent: "space-between",
            }}
          >
            <CancelDoneButton
              btnTitle="cancel"
              dataa={handle}

            />
            <CancelDoneButton
              btnTitle="Done"
              dataa={handle}
            />
          </Box>
          </Box>
       
      </Modal>
    </div>
  );
}
