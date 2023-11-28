import {
  Box,
  Checkbox,
  Divider,
  Fab,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { editedData } from "../redux/action";
const DisplayTodos = ({
  text,
  handleDelete,
  handleCheck,
  complete,
  id,
  checked,
}) => {
  const [editToggler, setEditToggler] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const dispatch = useDispatch();
  const handleEditFieldEnter = (e) => {
    if (e.key === "Enter") {
      dispatch(editedData(editedText, id), setEditToggler(false));
    }
  };
  const inputRef = useRef(null);
  useEffect(() => {
    if (editToggler) {
      inputRef.current.focus();
    }
  }, [editToggler]);
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
            fontFamily: "SFProDisplay",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              textAlign: "left",
              fontFamily: "SFProDisplay",
            }}
          >
            <Checkbox onClick={handleCheck} checked={checked} />
            {editToggler ? (
              <TextField
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onKeyPress={(e) => handleEditFieldEnter(e)}
                inputRef={inputRef}
                onBlur={() => {
                  dispatch(editedData(editedText, id), setEditToggler(false));
                }}
              />
            ) : (
              <Typography
                variant="h5"
                sx={{ wordWrap: "anywhere", fontFamily: "SFProText" }}
              >
                {text}
              </Typography>
            )}
          </Box>
          <Box sx={{ width: { xs: "40%", lg: "23%" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {editToggler ? (
                <Fab
                  size="small"
                  color="success"
                  aria-label="edit"
                  sx={{ zIndex: 1 }}
                  onClick={() => {
                    dispatch(editedData(editedText, id), setEditToggler(false));
                  }}
                >
                  <AddIcon />
                </Fab>
              ) : (
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="edit"
                  sx={{ zIndex: 1 }}
                  onClick={() => setEditToggler(true)}
                >
                  <EditIcon sx={{ fontFamily: "SFProDisplay" }} />
                </Fab>
              )}

              <Fab
                size="small"
                color="error"
                aria-label="delete"
                sx={{ zIndex: 1, fontFamily: "SFProDisplay" }}
                onClick={handleDelete}
              >
                <DeleteIcon />
              </Fab>
              {complete}
            </Box>
          </Box>
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default DisplayTodos;
