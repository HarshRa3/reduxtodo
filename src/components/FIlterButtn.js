import { Button } from '@mui/material'
import React from 'react'

const FIlterButtn = ({title,handleFilter,filterBtnColor}) => {
  return (
    <>
     <Button variant='contained'sx={{width:{xs:'40%',sm:'30%',md:'25%',lg:'20%'}}} onClick={handleFilter} color={filterBtnColor} >{title}</Button> 
    </>
  )
}

export default FIlterButtn
