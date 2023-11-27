import { Button } from '@mui/material'
import React from 'react'
const CancelDoneButton = ({btnTitle,dataa}) => {
  
  return (
    <Button
    onClick={dataa}
    variant="text"
    color={"primary"}
    sx={{ cursor: "pointer" }}
  

  >
    {btnTitle}
  </Button  >
  )
}

export default CancelDoneButton
