import { Facebook, GitHub, Instagram, Twitter } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'black',color:'white',p:3
     }}>
        <Box
        sx={{
            my:3,
            "& svg":{
                fontSize:'60px',
                cursor:"pointer",
                mr:2,
            },
            "& svg:hover":{
                color:'goldenrod',
                transform:'translateX(5px)',
                transition:'all 400ms'
            }
        }}>
            <Instagram/>
            <Twitter/>
            <Facebook/>
            <GitHub/>
        </Box>
        <Typography varient="h5"
        sx={{"@media (max-width:600px)":{
            fontSize:"1rem"
        }}}>
            All Rights Reserved &copy; Harry
        </Typography>
    </Box>
    </>
  )
}

export default Footer