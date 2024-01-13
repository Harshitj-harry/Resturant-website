import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Call, Mail, SupportAgent } from '@mui/icons-material'

const Contact   = () => {
  return (
    <Layout>
        <Box sx={{my:5,ml:10,"& h4":{fontWeight:'bold'}}}>
          <Typography variant='h4'>
            Contact My Resturant
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Excepturi nulla dignissimos 
            repellendus maiores accusantium aliquam cum 
            molestias, perspiciatis, cupiditate odio inventore 
            animi, iste eveniet repudiandae totam asperiores 
            temporibus incidunt laborum.
          </p>
        </Box>
        <Box sx={{m:3,width:"600px",ml:10,"@media(max-width:600px)":{
          width:"300px"

        }}} >
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgent sx={{color:"red",pt:1}}/> 1234567890 (trollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <Mail sx={{color:"skyblue",pt:1}}/> help@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <Call sx={{color:"purple",pt:1}}/> 12345-465678
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact  