import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { myList } from '../components/data/data'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {
          myList.map(menu=>(
            <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
              <CardActionArea>
                <CardMedia sx={{minHeight:'400px'}} component={"img"} src={menu.img} alt={menu.name}/>
                <CardContent>
                  <Typography variant='h5' gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant='h6'>
                    {menu.price}
                  </Typography>
                </CardContent>

              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu